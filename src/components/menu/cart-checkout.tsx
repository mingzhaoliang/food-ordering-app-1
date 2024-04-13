"use client";

import { accessCart, cartCheckout } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { cartActions } from "@/lib/store/cart-slice";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import CheckoutForm from "../general/checkout-form";

export default function CartCheckout() {
    const pathname = usePathname();
    const CheckoutWithPathname = cartCheckout.bind(null, pathname);

    const [state, formAction] = useFormState(CheckoutWithPathname, { message: "", url: "" });

    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const backHandler = () => {
        dispatch(cartActions.setCheckout(false));
    }

    useEffect(() => {
        async function clearCart() {
            await accessCart("clear");
        }

        if (state.message === "success" && state.url) {
            // clear cart before redirecting
            dispatch(cartActions.removeAllItems());
            clearCart();
            // redirect to payment page
            window.location.assign(state.url);
        }
    }, [state])

    return (
        <CheckoutForm
            formState={state}
            formAction={formAction}
            backHandler={backHandler}
            {...user} />
    )
}