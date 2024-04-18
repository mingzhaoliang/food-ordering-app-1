"use client";

import Image from "next/image";
import ConfirmToPaymentButton from "./confirm-to-payment-button";

export default function CheckoutForm({ formState, formAction, backHandler, username, phoneNumber, street, city, state, postcode }: { formState: { message: string; url: string } | undefined, formAction: (payload: FormData) => void, backHandler: () => void, username: string, phoneNumber: string, street: string, city: string, state: string, postcode: string }) {

    return (
        <form className="w-full rounded-md p-6 flex flex-col gap-4 font-lato text-slate-800" action={formAction}>
            <div className="space-y-1 pb-2 border-b border-slate-800/20">
                <div className="relative flex items-center gap-1">
                    <Image src="/icons/chevron-left.svg" alt="back" width={17} height={17} draggable={false} className="-ml-1 cursor-pointer" onClick={backHandler} />
                    <h1 className="text-xl md:text-2xl">Delivery Details</h1>
                </div>
                <p className="text-sm text-slate-600">View and change your delivery details here</p>
            </div>
            <div className="space-y-2 pb-6 border-b border-slate-800/20">
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-2">
                    <div className="space-y-1">
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" name="username" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={username} />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={phoneNumber} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={street} />
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))] gap-2">
                    <div className="space-y-1">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={city} />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="state">State</label>
                        <select key={state} id="state" name="state" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={state || "NSW"}>
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
                        <input type="text" id="postcode" name="postcode" className="block w-full px-2 py-1 border border-gray-300 rounded-md" defaultValue={postcode} />
                    </div>
                </div>
                {formState?.message && formState.message !== "success" && <p className="text-rose-500">{formState.message}</p>}
            </div>
            <ConfirmToPaymentButton />
        </form>
    )
}