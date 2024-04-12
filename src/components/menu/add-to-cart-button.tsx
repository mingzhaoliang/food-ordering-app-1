"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { addItem, cartActions } from "@/lib/store/cart-slice";
import { MenuItem } from "@/lib/crud/model-type";
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function AddToCartButton({ item }: { item: MenuItem }) {
    const { data: session, status } = useSession();

    const dispatch = useAppDispatch();


    const clickHandler = () => {
        dispatch(cartActions.clearTimers());

        dispatch(addItem({
            menu_id: item._id,
            name: item.name,
            public_id: item.public_id,
            course: item.course,
            price: item.price,
        }));

        dispatch(cartActions.setAddedItems());
        dispatch(cartActions.setChanged(true));

        dispatch(cartActions.setTimer1(setTimeout(() => dispatch(cartActions.setChanged(false)), 1000 * 1.25)));
        dispatch(cartActions.setTimer2(setTimeout(() => dispatch(cartActions.resetAddedItems()), 1000 * 1.25 + 500)));
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