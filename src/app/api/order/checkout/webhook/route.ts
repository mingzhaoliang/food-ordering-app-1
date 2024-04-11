import { getOrderById, updateOrderStatus } from "@/lib/crud/order";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
    let event;

    try {

        const signature = req.headers.get("stripe-signature");
        const data = await req.text();
        event = stripe.webhooks.constructEvent(data, signature as string, process.env.STRIPE_WEBHOOK_SECRET!);

    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: `webhook error: ${error.message}` }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const orderId = event.data.object.metadata?.orderId;

        if (!orderId) {
            return NextResponse.json({ message: "Invalid order id" }, { status: 400 });
        }

        const order = await getOrderById(orderId);

        if (!order) {
            return NextResponse.json({ message: "Order not found" }, { status: 404 });
        }

        await updateOrderStatus(orderId, "paid");
    }

    return NextResponse.json({ status: 200 });
}