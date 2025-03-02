"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { myActions } from "@/lib/store/my-slice";
import CheckoutForm from "@/components/general/checkout-form";
import { placedOrderCheckout } from "@/lib/actions/orders";
import { DBOrder } from "@/types/orders";

export default function PlacedOrderCheckout({ order }: { order: DBOrder }) {
	const pathname = usePathname();
	const CheckoutWithOrderIdPathname = placedOrderCheckout.bind(null, order._id, pathname);

	const [state, formAction] = useFormState(CheckoutWithOrderIdPathname, { message: "", url: "" });

	const dispatch = useAppDispatch();

	const backHandler = () => {
		dispatch(myActions.setFurtherAction(null));
	};

	useEffect(() => {
		if (state.message === "success" && state.url) {
			// redirect to payment page
			window.location.assign(state.url);
		}
	}, [state]);

	return (
		<CheckoutForm
			formState={state}
			formAction={formAction}
			backHandler={backHandler}
			{...order.delivery_details}
		/>
	);
}
