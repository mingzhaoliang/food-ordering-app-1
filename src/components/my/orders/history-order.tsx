"use client";

import { Order } from "@/lib/crud/model-type";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import OrderItemBrief from "./order-item-brief/order-brief";
import OrderItemDetails from "./order-item-details/order-details";
import { useEffect } from "react";
import { ordersActions } from "@/lib/store/orders-slice";

export default function HistoryOrder({ order }: { order: Order }) {
    const { activeOrder } = useAppSelector(state => state.orders);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ordersActions.setActiveOrder(null));
        dispatch(ordersActions.setFurtherAction(null));
    }, [])

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