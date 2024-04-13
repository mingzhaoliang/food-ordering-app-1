"use client";

import { Order } from "@/lib/crud/model-type";
import { useAppSelector } from "@/lib/store/hooks";
import OrderItemBrief from "./order-item-brief/order-brief";
import OrderItemDetails from "./order-item-details/order-details";

export default function HistoryOrder({ order }: { order: Order }) {
    const { activeOrder } = useAppSelector(state => state.orders);

    return (
        <>
            {
                activeOrder === order._id
                    ? <OrderItemDetails order={order} />
                    : <OrderItemBrief order={order} />
            }
        </>
    )
}