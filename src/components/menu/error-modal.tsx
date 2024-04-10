"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Modal from "../ui/modal";
import { cartActions } from "@/lib/store/cart-slice";
import Image from "next/image";

export default function ErrorModal() {
    const { error } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    if (!error) return null;

    const onClose = () => {
        dispatch(cartActions.resetError());
    }

    return (
        <Modal onClose={onClose} open={error !== null} isFlexible={false}>
            <div className="bg-white w-full rounded-md p-6 flex flex-col items-center gap-8 font-lato">
                <h2 className="text-xl text-center flex flex-wrap justify-center items-center gap-2">
                    <Image src="/icons/warning.png" alt="warning" width={28} height={28} draggable={false} />
                    Something went wrong
                </h2>
                <p className="text-center">{error}</p>
                <button onClick={onClose} className="w-full p-2 rounded bg-slate-800 text-white hover:bg-slate-950 transition-all">Okay</button>
            </div>
        </Modal>
    )
}