"use client";

import { CartItem } from "@/lib/crud/model-type";
import { addItem, cartActions, removeItem } from "@/lib/store/cart-slice";
import { useAppDispatch } from "@/lib/store/hooks";
import { menuActions } from "@/lib/store/menu-slice";
import { formatter } from "@/utils/formatter";
import Image from "next/image";
import Spinner from "../ui/spinner";

export default function CartItems({ userId, cartItems }: { userId: string, cartItems?: (CartItem)[] | null | undefined, }) {
    const dispatch = useAppDispatch();

    const addItemHandler = (item: CartItem) => {
        dispatch(addItem(userId, item)).catch(error => {
            dispatch(cartActions.setError(error.message));
            dispatch(menuActions.setShowCartModal(false))
        })
    }

    const removeItemHandler = (item: CartItem) => {
        dispatch(removeItem(userId, item.menu_id)).catch(error => {
            dispatch(cartActions.setError(error.message));
            dispatch(menuActions.setShowCartModal(false))
        })
    }

    return (
        <div className="flex flex-col gap-2 pt-2 pb-6 border-b border-slate-800/20 overflow-auto max-h-96">
            {
                cartItems && cartItems.length > 0 && cartItems.map(item => (
                    <div key={item.menu_id} className="grid grid-cols-[1fr_auto] xxs:grid-cols-[2.1fr_1fr_1fr] lg:grid-cols-[1fr_auto] xl:grid-cols-[2.4fr_1fr_1fr] items-center gap-x-4">
                        <p className="w-full max-xl:self-start max-xxs:row-span-2 lg:row-span-2 xl:row-auto leading-tight">{item.name}</p>
                        <div className="flex gap-2 items-center justify-self-end xl:justify-self-center">
                            <button onClick={() => removeItemHandler(item)} className="w-4 h-4 rounded-full border border-slate-800 flex justify-center items-center font-mono hover:bg-slate-800 hover:text-white transition-all outline-none">-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => addItemHandler(item)} className="w-4 h-4 rounded-full border border-slate-800 flex justify-center items-center font-mono hover:bg-slate-800 hover:text-white transition-all outline-none">+</button>
                        </div>
                        <p className="justify-self-end xl:justify-self-center max-xxs:col-start-2 lg:col-start-2 xl:col-auto">
                            {formatter(item.price * item.quantity)}
                        </p>
                    </div>
                ))
            }
            {
                cartItems && cartItems.length === 0 && (
                    <div className="flex gap-2 justify-center items-center">
                        <Image src="/icons/cart2.svg" alt="empty cart" width={20} height={20} draggable={false} />
                        <p>Your cart is empty</p>
                    </div>
                )
            }
            {
                !cartItems && (
                    <div className="flex justify-center items-center">
                        <Spinner fallback="Loading cart..." />
                    </div>
                )
            }
        </div>
    )
}