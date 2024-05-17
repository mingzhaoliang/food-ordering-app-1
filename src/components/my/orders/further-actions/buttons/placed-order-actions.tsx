"use client";

import FilledButton from "@/components/ui/button/filled-button";
import Modal from "@/components/ui/modal";
import { updateOrderExpiration } from "@/lib/crud/orders";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { myActions } from "@/lib/store/my-slice";

export default function PlacedOrderActions({ expiresAt }: { expiresAt: Date }) {
	const { activeOrder, cancelOrder } = useAppSelector((state) => state.my);
	const dispatch = useAppDispatch();

	const cancelHandler = () => {
		if (expiresAt <= new Date()) return;
		dispatch(myActions.setCancelOrder(true));
	};

	const payHandler = () => {
		dispatch(myActions.setFurtherAction("checkout"));
	};

	const closeModalHandler = () => {
		dispatch(myActions.setCancelOrder(false));
	};

	const confirmHandler = () => {
		dispatch(myActions.setCancelOrder(false));
		dispatch(myActions.setActiveOrder(null));

		if (activeOrder && expiresAt > new Date())
			updateOrderExpiration(activeOrder!, new Date(new Date().getTime() - 1));
	};

	return (
		<>
			<div className="flex gap-2 text-sm xxs:text-base md:text-lg">
				<FilledButton colour="slate" type="button" onClick={cancelHandler}>
					Cancel <span className="hidden xs:inline">order</span>
				</FilledButton>
				<FilledButton colour="teal" type="button" onClick={payHandler}>
					Pay <span className="hidden xs:inline">now</span>
				</FilledButton>
			</div>
			<Modal open={cancelOrder} onClose={closeModalHandler}>
				<div className="max-w-80 bg-white w-full rounded-md p-6 flex flex-col items-center gap-8 font-lato">
					<h2 className="text-xl text-center flex flex-wrap justify-center items-center gap-2">
						Are you sure you want to cancel this order?
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<button
							onClick={closeModalHandler}
							className="w-full px-2 py-1 rounded bg-slate-700 text-white hover:bg-slate-900 transition-all"
						>
							No
						</button>
						<button
							onClick={confirmHandler}
							className="w-full px-2 py-1 rounded border border-slate-800 text-slate-800 hover:border-rose-500 hover:bg-rose-500 hover:text-white transition-all"
						>
							Confirm
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
}
