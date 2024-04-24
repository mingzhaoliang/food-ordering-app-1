"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import CartDetails from "./cart-details";
import { useEffect } from "react";
import { fetchCartData } from "@/lib/store/cart-slice";
import { useSession } from "next-auth/react";
import CartCheckout from "./cart-checkout";

export default function Cart() {
    const { data: session, status } = useSession();
    const { checkout } = useAppSelector((state) => state.cart);

    const dispatch = useAppDispatch();

    useEffect(() => {
        async function init() {
            dispatch(fetchCartData());
        }

        if (status === "authenticated" && session?.user) {
            init();
        }
    }, [dispatch, session?.user, status]);

    if (status === "unauthenticated" && checkout) {
        throw new Error("Unauthorized");
    }

    return (
        <div className="rounded-lg shadow-md bg-white">
            {checkout ? <CartCheckout /> : <CartDetails />}
        </div>
    );
}
