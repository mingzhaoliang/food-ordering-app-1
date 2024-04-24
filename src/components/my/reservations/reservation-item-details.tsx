"use client";

import { ReservationDetails } from "@/lib/crud/model-type";
import { useAppDispatch } from "@/lib/store/hooks";
import { myActions } from "@/lib/store/my-slice";
import StatusTag from "../../general/status-tag";
import { GoChevronUp } from "react-icons/go";
import Details from "@/components/general/reservation-details";

export default function ReservationItemDetails({
	reservation,
}: {
	reservation: ReservationDetails & { _id: string };
}) {
	const dispatch = useAppDispatch();

	const closeHandler = () => {
		dispatch(myActions.setActiveReservation(null));
	};
	return (
		<div className="p-4 bg-white rounded-lg space-y-2">
			<div
				className="pb-1 xs:pb-2 border-b border-slate-800/20 flex justify-between items-start cursor-pointer"
				onClick={closeHandler}
			>
				<div className="flex items-center flex-wrap gap-2 md:gap-4">
					<h1 className="text-xl md:text-2xl">
						<span className="hidden xxs:inline">Reservation </span>
						Details
					</h1>
					<StatusTag status={reservation.status!} />
				</div>
				<button className="text-sm p-2 text-slate-800/60 flex items-center">
					<GoChevronUp /> Collapse
				</button>
			</div>
			<Details {...reservation} />
		</div>
	);
}
