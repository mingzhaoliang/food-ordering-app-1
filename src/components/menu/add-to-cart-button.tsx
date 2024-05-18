"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { cartActions } from "@/lib/store/cart-slice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { cartAddItem } from "@/lib/actions/cart";
import { globalActions } from "@/lib/store/global-slice";
import { DBMenuItem } from "@/types/menu";

export default function AddToCartButton({ item }: { item: DBMenuItem }) {
	const { data: session, status } = useSession();

	const dispatch = useAppDispatch();

	const clickHandler = () => {
		dispatch(cartActions.clearTimers());

		dispatch(
			cartActions.addItem({
				menu_id: item._id,
				name: item.name,
				public_id: item.public_id,
				course: item.course,
				price: item.price,
				quantity: 1,
			})
		);
		dispatch(cartActions.setAddedItems());
		dispatch(cartActions.setChanged(true));

		const timer1 = setTimeout(() => dispatch(cartActions.setChanged(false)), 1000 * 1.25);
		const timer2 = setTimeout(() => dispatch(cartActions.resetAddedItems()), 1000 * 1.25 + 500);
		dispatch(cartActions.setTimer1(timer1));
		dispatch(cartActions.setTimer2(timer2));

		cartAddItem(item._id).catch((error) => {
			// roll back cart changes
			dispatch(cartActions.removeItem(item._id));

			// display error message
			dispatch(globalActions.setToast({ status: "error", message: error.message }));
		});
	};

	let content;

	if (status === "authenticated") {
		content = (
			<button
				className="p-2 rounded-full shadow-md bg-teal-600/20 hover:bg-teal-600/50 text-slate-800 transition-colors duration-300"
				onClick={clickHandler}
			>
				<BsCartPlus className="xs:text-lg xl:text-xl 2xl:text-2xl" />
			</button>
		);
	} else if (status === "loading") {
		content = null;
	} else {
		content = (
			<Link
				href="/api/auth/signin"
				className="p-2 rounded-full shadow-md bg-teal-600/20 hover:bg-teal-600/50 text-slate-800 transition-colors duration-300"
			>
				<BsCartPlus className="xs:text-lg xl:text-xl 2xl:text-2xl" />
			</Link>
		);
	}

	return <>{content}</>;
}
