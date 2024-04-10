"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { formatter } from "@/utils/formatter";
import Image from "next/image";
import CartItems from "./cart-items";
import CartSummary from "./cart-summary";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { cartActions } from "@/lib/store/cart-slice";
import { defaultDeliveryFee, freeDeliveryThreshold } from "@/utils/data";


export default function Cart() {

    const { data: session, status } = useSession();
    const { items } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const checkoutHandler = () => {
        dispatch(cartActions.setCheckout(true));
    }

    if (status === "unauthenticated") {
        return (
            <div className="bg-white w-full rounded-md p-6 flex flex-col gap-4 font-lato">
                <h1 className="text-2xl pb-2 border-b border-slate-800/20">Your Order</h1>
                <CartItems userId="" cartItems={[]} />
                <CartSummary subtotal={0} deliveryFee={null} total={0} />
                <Link href="/api/auth/signin" className="text-center bg-teal-700 hover:bg-teal-900 text-white rounded py-2 transition-all">Sign in to order</Link>
            </div>
        )
    } else if (status === "loading") {
        return (
            <div className="bg-white w-full rounded-md p-6 flex flex-col gap-4 font-lato">
                <h1 className="text-2xl pb-2 border-b border-slate-800/20">Your Order</h1>
                <CartItems userId="" />
                <CartSummary subtotal={0} deliveryFee={null} total={0} />
                <p className="bg-teal-700 hover:bg-teal-900 text-white rounded py-2 transition-all text-center">Loading...</p>
            </div>
        )
    }

    const cartItems = Object.values(items);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = cartItems.length > 0 ? (subtotal >= freeDeliveryThreshold ? 0 : defaultDeliveryFee) : null;
    const total = subtotal + (deliveryFee ? deliveryFee : 0);

    return (
        <div className="bg-white w-full rounded-md p-6 flex flex-col gap-4 font-lato">
            <h1 className="text-2xl pb-2 border-b border-slate-800/20">Your Order</h1>
            <CartItems userId={session!.user.id} cartItems={cartItems} />
            <CartSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
            {
                cartItems.length > 0 && (deliveryFee && deliveryFee > 0
                    ? <p className="text-sm text-slate-800">Spend {formatter(freeDeliveryThreshold - subtotal)} more to get FREE delivery</p>
                    : <p className="text-sm text-slate-800 flex items-center gap-2">
                        <Image src="/icons/truck.svg" alt="truck" width={16} height={16} draggable={false} />
                        Your order qualifies for free delivery!
                    </p>)
            }
            <button className="bg-teal-700 hover:bg-teal-900 text-white rounded py-2 transition-all" onClick={checkoutHandler}>Checkout</button>
        </div>
    )
}