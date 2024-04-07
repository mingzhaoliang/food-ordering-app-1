"use client";

import { formatter } from "@/utils/formatter";

export default function CartCheckout({ subtotal, deliveryFee, total }: { subtotal: number, deliveryFee: number | null, total: number }) {

    return (
        <div className="flex flex-col gap-2 pb-4 border-b border-slate-800/20">
            <div className="flex justify-between">
                <p className="font-bold">Subtotal</p>
                <p>{formatter(subtotal)}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-bold">Delivery fee</p>
                <p>{deliveryFee !== null ? formatter(deliveryFee) : ""}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-bold">Total</p>
                <p>{formatter(total)}</p>
            </div>
        </div>
    )
}