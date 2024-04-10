"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Checkout from "./checkout";
import Cart from "./cart";
import { useEffect } from "react";
import { fetchCartData } from "@/lib/store/cart-slice";
import { useSession } from "next-auth/react";

export default function Order() {
    const { data: session, status } = useSession();
    const { checkout } = useAppSelector(state => state.cart);

    const dispatch = useAppDispatch();

    useEffect(() => {
        async function init() {
            dispatch(fetchCartData());
        }

        if (status === "authenticated" && session?.user) {
            init();
        }
    }, [status])

    if (status === "unauthenticated" && checkout) {
        throw new Error("Unauthorized");
    }

    return (
        <>{
            checkout
                ? <Checkout />
                : <Cart />
        }</>
    )
}