import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCartItems } from "@/lib/crud/cart";
import { Cart, CartItem, DeliveryDetails, Order } from "@/lib/crud/model-type";
import { defaultDeliveryFee, freeDeliveryThreshold, orderExpirationTime, overdueTime } from "@/utils/data";
import { createOrder, getOrderById, updateOrderDeliveryDetails } from "@/lib/crud/order";
import { ObjectId } from "mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2023-10-16",
});

type CheckoutSessionRequest = {
    userId: string,
    deliveryDetails: DeliveryDetails;
    callbackUrl: string;
    orderId?: string;
}

export async function POST(req: NextRequest) {
    const checkoutSessionRequest: CheckoutSessionRequest = await req.json();
    const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${checkoutSessionRequest.callbackUrl}`;
    const orderExist = !!checkoutSessionRequest.orderId;

    try {
        let orderId: string, items: CartItem[];

        if (orderExist) {
            orderId = checkoutSessionRequest.orderId as string;
            const order = await getOrderById(orderId);
            items = Object.values(order.items);
        } else {
            orderId = new ObjectId().toString();
            const cartItems = await getCartItems(checkoutSessionRequest.userId) as Cart;
            items = Object.values(cartItems);
        }

        if (items.length === 0) {
            throw new Error(orderExist ? "This order is invalid." : "Your cart is empty");
        }

        const { lineItems, totalPrice, deliveryFee } = await createLineItems(items);
        const stripSession = await createSession(lineItems, orderId, deliveryFee, callbackUrl);

        if (!stripSession.url) {
            return NextResponse.json({ message: "Failed to create stripe session" }, { status: 500 });
        };

        if (orderExist) {
            await updateOrderDeliveryDetails(orderId, checkoutSessionRequest.deliveryDetails);
        } else {
            const dateNow = Date.now();

            const newOrder: Order = {
                _id: orderId,
                user_id: checkoutSessionRequest.userId,
                status: "placed",
                delivery_details: checkoutSessionRequest.deliveryDetails,
                items: items,
                subtotal: totalPrice,
                delivery_fee: deliveryFee,
                total_amount: totalPrice + deliveryFee,
                created_at: new Date(dateNow),
                expires_at: new Date(dateNow + orderExpirationTime * 1000 + overdueTime * 1000),
            }

            await createOrder(newOrder);
        }

        return NextResponse.json({ url: stripSession.url }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }

}

const createLineItems = async (items: CartItem[]) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = totalPrice > freeDeliveryThreshold ? 0 : defaultDeliveryFee;

    const lineItems = items.map(item => {
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

    return { lineItems, totalPrice, deliveryFee };
}

const createSession = async (
    lineItems: Stripe.Checkout.SessionCreateParams.LineItem[],
    orderId: string,
    deliveryFee: number,
    callbackUrl: string,
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
        success_url: callbackUrl,
        cancel_url: callbackUrl,
        expires_at: Math.floor(Date.now() / 1000) + 60 * 30 // orderExpirationTime,
    })

    return sessionData;
}