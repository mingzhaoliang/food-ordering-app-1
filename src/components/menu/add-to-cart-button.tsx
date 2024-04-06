"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { addItem } from "@/lib/store/cart-slice";
import { MenuItem } from "@/lib/crud/model-type";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AddToCartButton({ item }: { item: MenuItem }) {
    const { data: session, status } = useSession();

    const dispatch = useAppDispatch();

    const clickHandler = () => {
        dispatch(addItem(session!.user.id, {
            menu_id: item._id,
            name: item.name,
            public_id: item.public_id,
            price: item.price,
            unit: item.unit,
        }))
    }

    let content;

    if (status === "authenticated") {
        content = (
            <button className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-white text-nowrap" onClick={clickHandler}>
                Add<span className="max-xs:hidden"> to Cart</span>
            </button>
        )
    } else if (status === "loading") {
        content = (
            <div className="px-4 py-2 rounded bg-slate-800 text-white text-nowrap">
                Verifying...
            </div>
        )
    } else {
        content = (
            <Link href="/api/auth/signin" className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-white text-nowrap">
                Order
            </Link>
        )
    }

    return <>{content}</>
}