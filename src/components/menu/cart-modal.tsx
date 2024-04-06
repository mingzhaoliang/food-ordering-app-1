"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Modal from "../ui/modal";
import Cart from "./cart";
import { menuActions } from "@/lib/store/menu-slice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CartModal() {
    const searchParams = useSearchParams();
    const showCart = searchParams.get("show-cart") === "true";

    const { showCartModal } = useAppSelector(state => state.menu);
    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(menuActions.setShowCartModal(false));
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
        <Modal open={showCartModal} onClose={onClose}>
            <Cart />
        </Modal>
    )
}