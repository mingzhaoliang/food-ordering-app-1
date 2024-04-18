"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { addItem, cartActions } from "@/lib/store/cart-slice";
import { MenuItem } from "@/lib/crud/model-type";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";


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
            <button className="p-2 rounded-full shadow-md bg-teal-600/20 hover:bg-teal-600/50 text-slate-800 transition-colors duration-300" onClick={clickHandler}>
                <BsCartPlus className="xs:text-lg xl:text-xl 2xl:text-2xl" />
            </button>
        )
    } else if (status === "loading") {
        content = null
    } else {
        content = (
            <Link href="/api/auth/signin" className="p-2 rounded-full shadow-md bg-teal-600/20 hover:bg-teal-600/50 text-slate-800 transition-colors duration-300">
                <BsCartPlus className="xs:text-lg xl:text-xl 2xl:text-2xl" />
            </Link>
        )
    }

    return <>{content}</>
}