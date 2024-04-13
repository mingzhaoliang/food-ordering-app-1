"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { ordersActions } from "@/lib/store/orders-slice";
import { useEffect } from "react";

export default function OrdersPageLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ordersActions.setActiveOrder(null));
        dispatch(ordersActions.setFurtherAction(null));
    }, [])

    return (
        <div className="w-full md:row-start-2 md:col-span-6 rounded-md">
            {children}
        </div>
    )
}