"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Modal from "../ui/modal";
import { menuActions } from "@/lib/store/menu-slice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Order from "./order";
import { cartActions } from "@/lib/store/cart-slice";

export default function CartModal() {
    const searchParams = useSearchParams();
    const showCart = searchParams.get("show-cart") === "true";

    const { showCartModal } = useAppSelector(state => state.menu);
    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(menuActions.setShowCartModal(false));
        dispatch(cartActions.setCheckout(false));
    }

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const handleResize = () => {
            if (mq.matches) {
                dispatch(menuActions.setShowCartModal(false));
            }
        }

        mq.addEventListener("change", handleResize);

        return () => mq.removeEventListener("change", handleResize);
    }, [])

    return (
        <Modal open={showCartModal} onClose={onClose} isFlexible>
            <Order />
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-800 hover:translate-y-0.5 transition-transform">{"\u2715"}</button>
        </Modal>
    )
}