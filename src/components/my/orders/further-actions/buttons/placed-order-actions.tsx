"use client";

import Modal from "@/components/ui/modal";
import { refreshPage } from "@/lib/actions";
import { updateOrderExpiration } from "@/lib/crud/orders";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { myActions } from "@/lib/store/my-slice";
import { usePathname } from "next/navigation";

export default function PlacedOrderActions() {
	const { activeOrder, cancelOrder } = useAppSelector((state) => state.my);
	const dispatch = useAppDispatch();
	const pathname = usePathname();

	const cancelHandler = () => {
		dispatch(myActions.setCancelOrder(true));
	};

	const payHandler = () => {
		dispatch(myActions.setFurtherAction("checkout"));
	};

	const closeModalHandler = () => {
		dispatch(myActions.setCancelOrder(false));
	};

	const confirmHandler = () => {
		async function cancelOrder() {
			await updateOrderExpiration(activeOrder!, new Date(new Date().getTime() - 1));
			refreshPage(pathname, "page");
		}
		dispatch(myActions.setCancelOrder(false));
		dispatch(myActions.setActiveOrder(null));

		if (activeOrder) cancelOrder();
	};

	return (
		<>
			<div className="flex gap-2 text-sm xxs:text-base md:text-lg">
				<button
					className="w-full text-center p-2 rounded font-lato text-slate-800 border border-slate-800 hover:text-white hover:bg-slate-800 transition-all duration-300"
					onClick={cancelHandler}
				>
					Cancel
					<span className="hidden xs:inline"> Order</span>
				</button>
				<button
					className="w-full text-center p-2 rounded font-lato text-white border border-teal-700 bg-teal-700 hover:text-white hover:border-teal-900 hover:bg-teal-900 transition-all duration-300"
					onClick={payHandler}
				>
					Pay
					<span className="hidden xs:inline"> Now</span>
				</button>
			</div>
			<Modal open={cancelOrder} onClose={closeModalHandler}>
				<div className="max-w-80 bg-white w-full rounded-md p-6 flex flex-col items-center gap-8 font-lato">
					<h2 className="text-xl text-center flex flex-wrap justify-center items-center gap-2">
						Are you sure you want to cancel this order?
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<button
							onClick={closeModalHandler}
							className="w-full px-2 py-1 rounded bg-slate-800 text-white hover:bg-slate-950 transition-all"
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
