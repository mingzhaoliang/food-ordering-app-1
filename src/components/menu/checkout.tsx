"use client";

import { accessCart, checkout } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { cartActions } from "@/lib/store/cart-slice";
import Image from "next/image";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import ConfirmToPaymentButton from "./confirm-to-payment-button";

export default function Checkout() {
    const [state, formAction] = useFormState(checkout, { message: "", url: "" });

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
        <form className="bg-white w-full rounded-md p-6 flex flex-col gap-4 font-lato text-slate-800" action={formAction}>
            <div className="space-y-1 pb-2 border-b border-slate-800/20">
                <div className="relative flex items-center gap-1">
                    <Image src="/icons/chevron-left.svg" alt="back" width={17} height={17} draggable={false} className="-ml-1 cursor-pointer" onClick={backHandler} />
                    <h1 className="text-2xl">Delivery Details</h1>
                </div>
                <p className="text-sm text-slate-600">View and change your delivery details here</p>
            </div>
            <div className="space-y-2 pb-6 border-b border-slate-800/20">
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-2">
                    <div className="space-y-1">
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" name="username" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={user.username} />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={user.phoneNumber} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={user.street} />
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))] gap-2">
                    <div className="space-y-1">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={user.city} />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="state">State</label>
                        <select key={user.state} id="state" name="state" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={user.state || "NSW"}>
                            <option value="NSW">NSW</option>
                            <option value="VIC">VIC</option>
                            <option value="QLD">QLD</option>
                            <option value="SA">SA</option>
                            <option value="WA">WA</option>
                            <option value="TAS">TAS</option>
                            <option value="NT">NT</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="postcode">Postcode</label>
                        <input type="text" id="postcode" name="postcode" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={user.postcode} />
                    </div>
                </div>
                {state?.message && state.message !== "success" && <p className="text-rose-500">{state.message}</p>}
            </div>
            <ConfirmToPaymentButton />
        </form>
    )
}