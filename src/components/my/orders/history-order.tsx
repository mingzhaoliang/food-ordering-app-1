"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import OrderItemBrief from "./order-item-brief/order-brief";
import OrderItemDetails from "./order-item-details/order-details";
import { useEffect } from "react";
import { myActions } from "@/lib/store/my-slice";
import { DBOrder } from "@/types/orders";

export default function HistoryOrder({ order }: { order: DBOrder }) {
	const { activeOrder } = useAppSelector((state) => state.my);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(myActions.setActiveOrder(null));
		dispatch(myActions.setFurtherAction(null));
	}, [dispatch]);

	return (
		<>
			{activeOrder === order._id ? (
				<OrderItemDetails order={order} />
			) : (
				<OrderItemBrief order={order} />
			)}
		</>
	);
}
