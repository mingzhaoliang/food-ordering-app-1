"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Modal from "../ui/modal";
import { menuActions } from "@/lib/store/menu-slice";
import { useEffect } from "react";
import Cart from "./cart";
import { cartActions } from "@/lib/store/cart-slice";

export default function CartModal() {
    const { showCartModal } = useAppSelector((state) => state.menu);
    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(menuActions.setShowCartModal(false));
        dispatch(cartActions.setCheckout(false));
    };

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const handleResize = () => {
            if (mq.matches) {
                dispatch(menuActions.setShowCartModal(false));
            }
        };

        mq.addEventListener("change", handleResize);

        return () => mq.removeEventListener("change", handleResize);
    }, [dispatch]);

    return (
        <Modal open={showCartModal} onClose={onClose}>
            <div className="w-[calc(100vw_*_11/12)] xs:w-[calc(100vw_*_10/12)] md:w-[calc(100vw_*_8/12)]">
                <Cart />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-800 hover:translate-y-0.5 transition-transform"
                >
                    {"\u2715"}
                </button>
            </div>
        </Modal>
    );
}
