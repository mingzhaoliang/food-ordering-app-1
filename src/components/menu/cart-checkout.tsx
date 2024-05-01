"use client";

import { cartCheckout } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { cartActions } from "@/lib/store/cart-slice";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import CheckoutForm from "../general/checkout-form";
import { cartClear } from "@/lib/actions/cart";
import { globalActions } from "@/lib/store/global-slice";

export default function CartCheckout() {
	const pathname = usePathname();
	const CheckoutWithPathname = cartCheckout.bind(null, pathname);

	const [state, formAction] = useFormState(CheckoutWithPathname, { message: "", url: "" });

	const { user } = useAppSelector((state) => state.global);
	const dispatch = useAppDispatch();

	const backHandler = () => {
		dispatch(cartActions.setCheckout(false));
	};

	useEffect(() => {
		if (state.message === "success" && state.url) {
			// clear cart before redirecting
			dispatch(cartActions.removeAllItems());
			cartClear().catch((error) =>
				dispatch(globalActions.setToast({ status: "error", message: error.message }))
			);
			// redirect to payment page
			window.location.assign(state.url);
		}
	}, [dispatch, state]);

	return (
		<CheckoutForm
			formState={state}
			formAction={formAction}
			backHandler={backHandler}
			{...user}
		/>
	);
}
