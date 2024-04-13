"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { overdueTime } from "@/utils/data";
import { priceFormatter } from "@/utils/formatter";
import Image from "next/image";
import OrderStatusTag from "../order-status-tag";
import CartSummary from "@/components/menu/cart-summary";
import ExpirationTimer from "../expiration-timer";
import OrderDetailsItem from "./order-details-item";
export default function OrderDetail() {
    const { activeOrder, furtherAction } = useAppSelector(state => state.orders);

    if (!activeOrder) {
        return null;
    }

    const expiresAt = new Date(new Date(activeOrder.expires_at).getTime() - overdueTime * 1000);
    const status = activeOrder.status === "placed" && expiresAt < new Date() ? "cancelled" : activeOrder.status;
    const { items, subtotal, delivery_fee, total_amount } = activeOrder;

    let statusNote = null;
    switch (status) {
        case "placed":
            statusNote = <>Your order will expire in <ExpirationTimer orderStatus={status} expiresAt={expiresAt!} />.</>
            break;
        case "paid":
            statusNote = "Your order is on the way."
            break;
        case "cancelled":
            statusNote = "Not what you want? You can place a new order."
            break;
        case "delivered":
            statusNote = "Thank you for your order. Rate our service now!"
            break;
        default:
            break;
    }
    return (
        <>
                <div className="bg-white w-full rounded-md p-6 flex flex-col gap-4 font-lato text-slate-800">
                    <div className="text-2xl pb-2 border-b border-slate-800/20 flex justify-between items-center">
                        <h1>Order Details</h1>
                        <OrderStatusTag status={status} />
                    </div>
                    <div className="space-y-4 pb-4 border-b border-slate-800/20">
                        {items.map(item => <OrderDetailsItem key={item.menu_id} item={item} />)}
                    </div>
                    <CartSummary subtotal={subtotal} deliveryFee={delivery_fee} total={total_amount} />
                    <div className="text-sm text-slate-800/60 flex">
                        {statusNote}
                    </div>
                </div>
    )

}