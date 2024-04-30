"use client";

import { useFormStatus } from "react-dom";
import FilledButton from "../ui/button/filled-button";

export default function ConfirmToPaymentButton() {
	const { pending } = useFormStatus();

	return (
		<FilledButton colour="teal" type="submit" disabled={pending}>
			{pending ? "Processing..." : "Confirm to Payment"}
		</FilledButton>
	);
}
