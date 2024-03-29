"use client";

import { useFormStatus } from 'react-dom';

export default function ProfileFormSubmit() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="py-2 px-6 rounded-md border text-slate-800 border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300">
            {pending ? "Saving..." : "Save"}
        </button>
    )
}