"use client";

import { priceFormatter } from "@/utils/formatter";

export default function CartSummary({ subtotal, deliveryFee, total }: { subtotal: number, deliveryFee: number | null, total: number }) {

    return (
        <div className="flex flex-col gap-2 pb-4 border-b border-slate-800/20">
            <div className="flex justify-between">
                <p className="font-bold">Subtotal</p>
                <p>{priceFormatter(subtotal)}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-bold">Delivery fee</p>
                <p>{deliveryFee !== null ? priceFormatter(deliveryFee) : ""}</p>
            </div>
            <div className="flex justify-between">
                <p className="font-bold">Total</p>
                <p>{priceFormatter(total)}</p>
            </div>
        </div>
    )
}