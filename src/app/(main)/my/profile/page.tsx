"use client";

import ProfileFormSubmit from "@/components/my/profile/profile-form-submit";
import Spinner from "@/components/ui/spinner";
import { updateProfile } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { userActions } from "@/lib/store/user-slice";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";

function FormInput({ label, id, type, pattern, defaultValue, readOnly }: { label: string, id: string, type: string, pattern?: string, defaultValue: string, readOnly?: boolean }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-slate-800">{label}</label>
            <input type={type} id={id} name={id} className={`block w-full p-2 border border-gray-300 rounded-md ${readOnly ? "text-slate-500" : "text-slate-800"}`} pattern={pattern} defaultValue={defaultValue} readOnly={readOnly} />
        </div>
    )
}

export default function ProfilePage() {
    const [state, formAction] = useFormState(updateProfile, { message: "" });

    const { data: session, status } = useSession();
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    if (status === "loading") {
        return (
            <div className="min-h-80 flex justify-center items-center">
                <Spinner fallback="Loading..." />
            </div>
        )
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fd = new FormData(event.currentTarget);
        const data = Object.fromEntries(fd.entries());

        dispatch(userActions.setUser(data));
        formAction(fd);
    }

    return (
        <form className="max-md:mx-auto max-xs:w-full max-sm:w-11/12 max-md:w-10/12 md:max-w-[50rem] p-6 pb-8 bg-white rounded-lg flex flex-col gap-4 font-lato max-md:text-md max-lg:text-base transition-all" onSubmit={submitHandler} >
            <h1 className="md:hidden text-xl font-bold">Profile</h1>
            <FormInput label="Name" id="username" type="text" defaultValue={user.username || ""} />
            <div className="grid min-[480px]:grid-cols-2 gap-4">
                <FormInput label="Email" id="email" type="email" defaultValue={user.email || ""} readOnly />
                <FormInput label="Phone" id="phoneNumber" type="tel" pattern="^[0]\d{9,9}$" defaultValue={user.phoneNumber || ""} />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-4">
                <FormInput label="Street" id="street" type="text" defaultValue={user.street || ""} />
                <FormInput label="City" id="city" type="text" defaultValue={user.city || ""} />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-4">
                <div className="space-y-2">
                    <label htmlFor="state" className="block text-slate-800">State</label>
                    <select key={user.state} id="state" name="state" className="block w-full p-2 border border-gray-300 rounded-md" defaultValue={user.state || "NSW"}>
                        <option value="NSW">NSW</option>
                        <option value="VIC">VIC</option>
                        <option value="QLD">QLD</option>
                        <option value="SA">SA</option>
                        <option value="WA">WA</option>
                        <option value="TAS">TAS</option>
                        <option value="NT">NT</option>
                    </select>
                </div>
                <FormInput label="Postcode" id="postcode" type="text" pattern="\d{4,4}" defaultValue={user.postcode || ""} />
            </div>
            {state?.message && state.message !== "success" && <p className="text-rose-500">{state.message}</p>}
            {state?.message === "success" && <p className="text-green-500">Profile updated successfully!</p>}
            <div className="mt-4 flex justify-center items-center">
                <ProfileFormSubmit />
            </div>
        </form>
    )
}