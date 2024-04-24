"use client";

import { useFormStatus } from "react-dom";

export default function ConfirmToPaymentButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`${pending ? "bg-teal-700/60 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-900"} text-white rounded py-2 transition-all text-sm xxs:text-base md:text-lg`}
        >
            {pending ? "Processing..." : "Confirm to Payment"}
        </button>
    );
}
