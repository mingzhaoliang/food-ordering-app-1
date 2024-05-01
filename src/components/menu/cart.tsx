"use client";

import { useAppSelector } from "@/lib/store/hooks";
import CartDetails from "./cart-details";
import { useSession } from "next-auth/react";
import CartCheckout from "./cart-checkout";

export default function Cart() {
	const { status } = useSession();
	const { checkout } = useAppSelector((state) => state.cart);

	if (status === "unauthenticated" && checkout) {
		throw new Error("Unauthorized");
	}

	return (
		<div className="rounded-lg shadow-md bg-white">
			{checkout ? <CartCheckout /> : <CartDetails />}
		</div>
	);
}
