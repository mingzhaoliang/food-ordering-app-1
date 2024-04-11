import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCartItems } from "@/lib/crud/cart";
import { Cart, DeliveryDetails, Order } from "@/lib/crud/model-type";
import { defaultDeliveryFee, freeDeliveryThreshold, orderExpirationTime, overdueTime } from "@/utils/data";
import { createOrder } from "@/lib/crud/order";
import { ObjectId } from "mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2023-10-16",
});

type CheckoutSessionRequest = {
    userId: string,
    deliveryDetails: DeliveryDetails;
}

export async function POST(req: NextRequest) {
    const checkoutSessionRequest: CheckoutSessionRequest = await req.json();

    try {
        const newOrderId = new ObjectId();

        const { lineItems, cartItems, totalPrice, deliveryFee } = await createLineItems(checkoutSessionRequest.userId);
        const stripSession = await createSession(lineItems, newOrderId.toString(), deliveryFee);

        if (!stripSession.url) {
            return NextResponse.json({ message: "Failed to create stripe session" }, { status: 500 });
        };

        const dateNow = Date.now();

        const newOrder: Order = {
            _id: newOrderId,
            user_id: checkoutSessionRequest.userId,
            status: "placed",
            delivery_details: checkoutSessionRequest.deliveryDetails,
            items: cartItems,
            total_amount: totalPrice + deliveryFee,
            created_at: new Date(dateNow),
            expires_at: new Date(dateNow + orderExpirationTime * 1000 + overdueTime * 1000),
        }

        await createOrder(newOrder);

        return NextResponse.json({ url: stripSession.url }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }

}

const createLineItems = async (userId: string) => {
    const userCartItems = await getCartItems(userId) as Cart;
    const cartItems = Object.values(userCartItems);

    if (cartItems.length === 0) {
        throw new Error("Your cart is empty");
    }

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = totalPrice > freeDeliveryThreshold ? 0 : defaultDeliveryFee;

    const lineItems = cartItems.map(item => {
        const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
            price_data: {
                currency: "AUD",
                unit_amount: item.price * 100,
                product_data: {
                    name: item.name,
                },
            },
            quantity: item.quantity,
        }

        return lineItem;
    })

    return { lineItems, cartItems, totalPrice, deliveryFee };
}

const createSession = async (
    lineItems: Stripe.Checkout.SessionCreateParams.LineItem[],
    orderId: string,
    deliveryFee: number,
) => {
    const sessionData = stripe.checkout.sessions.create({
        line_items: lineItems,
        shipping_options: [
            {
                shipping_rate_data: {
                    display_name: "Delivery",
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: deliveryFee * 100,
                        currency: "AUD",
                    },
                }
            }
        ],
        mode: "payment",
        metadata: {
            orderId,
        },
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/menu/antipasti`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/menu/antipasti`,
        expires_at: Math.floor(Date.now() / 1000) + 60 * 30 // orderExpirationTime,
    })

    return sessionData;
}