"use client";

import { useFormStatus } from 'react-dom';

export default function ProfileFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className={`py-2 px-6 rounded-md border ${pending ? "border-slate-600 bg-slate-600 text-white cursor-not-allowed" : "text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white"} transition-all duration-300`}>
            {pending ? "Saving..." : "Save"}
        </button>
    )
}