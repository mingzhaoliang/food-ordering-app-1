"use client";

import { Order } from "@/lib/crud/model-type";
import { useAppDispatch } from "@/lib/store/hooks";
import { ordersActions } from "@/lib/store/orders-slice";

export default function ViewDetails({ order }: { order: Order }) {

    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(ordersActions.setActiveOrder(order));
    }
    return (
        <button className="text-sm text-slate-800/60 underline" onClick={clickHandler}>View details</button>
    )
}