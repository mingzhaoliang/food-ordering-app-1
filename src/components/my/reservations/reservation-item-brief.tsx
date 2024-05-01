"use client";

import ReservationSummary from "@/components/home/reservation/reservation-summary";
import { useAppDispatch } from "@/lib/store/hooks";
import { myActions } from "@/lib/store/my-slice";
import StatusTag from "../../ui/status-tag";
import { DBReservation } from "@/types/reservations";

export default function ReservationItemBrief({ reservation }: { reservation: DBReservation }) {
	const dispatch = useAppDispatch();

	const clickHandler = () => {
		dispatch(myActions.setActiveReservation(reservation._id));
	};

	return (
		<div className="p-4 bg-white rounded-lg cursor-pointer" onClick={clickHandler}>
			<div className="flex flex-col justify-between items-start xs:items-center gap-4">
				<ReservationSummary
					selectedDate={new Date(reservation.selectedDate)}
					guests={reservation.guests}
					selectedTime={reservation.selectedTime}
				/>
				<div className="w-full flex justify-between items-center gap-2">
					<StatusTag status={reservation.status!} />
					<button className="text-sm text-slate-800/60 underline">View details</button>
				</div>
			</div>
		</div>
	);
}
