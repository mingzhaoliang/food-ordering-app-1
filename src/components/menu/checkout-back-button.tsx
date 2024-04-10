"use client";

import { cartActions } from "@/lib/store/cart-slice";
import { useAppDispatch } from "@/lib/store/hooks";
import Image from "next/image";

export default function CheckoutBackButton() {
    const dispatch = useAppDispatch();

    const backHandler = () => {
        dispatch(cartActions.setCheckout(false));
    }

    return (
        <Image src="/icons/chevron-left.svg" alt="back" width={17} height={17} draggable={false} className="-ml-1 cursor-pointer" onClick={backHandler} />
    )
}