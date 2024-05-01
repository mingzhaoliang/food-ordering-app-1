"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

import { useEffect } from "react";
import { myActions } from "@/lib/store/my-slice";
import ReservationItemBrief from "./reservation-item-brief";
import ReservationItemDetails from "./reservation-item-details";
import { DBReservation } from "@/types/reservations";

export default function HistoryReservation({ reservation }: { reservation: DBReservation }) {
	const { activeReservation } = useAppSelector((state) => state.my);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(myActions.setActiveReservation(null));
	}, [dispatch]);

	return (
		<>
			{activeReservation === reservation._id ? (
				<ReservationItemDetails reservation={reservation} />
			) : (
				<ReservationItemBrief reservation={reservation} />
			)}
		</>
	);
}
