"use client";

import ProfileFormSubmit from "@/components/account/profile-form-submit";
import Spinner from "@/components/ui/spinner";
import { updateProfile } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { userActions } from "@/lib/store/user-slice";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";

function FormInput({ label, id, type, pattern, defaultValue, readOnly }: { label: string, id: string, type: string, pattern?: string, defaultValue: string, readOnly?: boolean }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block">{label}</label>
            <input type={type} id={id} name={id} className={`block w-full p-2 border border-gray-300 rounded-md ${readOnly ? "text-slate-500" : ""}`} pattern={pattern} defaultValue={defaultValue} readOnly={readOnly} />
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
        <form className="p-8 flex flex-col gap-4 font-lato max-lg:text-[0.9rem] transition-all" onSubmit={submitHandler} >
            <h1 className="md:hidden text-xl font-bold">Profile</h1>
            <FormInput label="Name" id="username" type="text" defaultValue={user.username || ""} />
            <div className="grid min-[480px]:grid-cols-2 gap-4">
                <FormInput label="Email" id="email" type="email" defaultValue={user.email || ""} readOnly />
                <FormInput label="Phone" id="phoneNumber" type="tel" pattern="^[0]\d{9,9}$" defaultValue={user.phoneNumber || ""} />
            </div>
            <FormInput label="Street" id="street" type="text" defaultValue={user.street || ""} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <FormInput label="City" id="city" type="text" defaultValue={user.city || ""} />
                <FormInput label="State" id="state" type="text" defaultValue={user.state || ""} />
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