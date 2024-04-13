"use client";

import { Order } from "@/lib/crud/model-type";
import { useAppSelector } from "@/lib/store/hooks";
import OrderItemBrief from "./order-item-brief";
import OrderItemDetails from "./order-details/order-item-details";

export default function OrderItem({ order }: { order: Order }) {
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