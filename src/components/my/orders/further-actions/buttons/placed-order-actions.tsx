"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { ordersActions } from "@/lib/store/orders-slice";

export default function PlacedOrderActions() {

    const dispatch = useAppDispatch();
    const payHandler = () => {
        dispatch(ordersActions.setFurtherAction("checkout"));
    }

    return (
        <div className="flex gap-2">
            <button className="w-full text-center p-2 rounded md:text-lg lg:text-xl font-lato text-slate-800 border border-slate-800 hover:text-white hover:bg-slate-800 transition-all duration-300">
                Cancel Order
            </button>
            <button
                className="w-full text-center p-2 rounded md:text-lg lg:text-xl font-lato text-white border border-teal-700 bg-teal-700 hover:text-white hover:border-teal-900 hover:bg-teal-900 transition-all duration-300"
                onClick={payHandler}
            >
                Pay Now
            </button>
        </div>
    )
}