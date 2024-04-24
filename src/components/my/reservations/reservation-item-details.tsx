"use client";

import { ReservationDetails } from "@/lib/crud/model-type";
import { useAppDispatch } from "@/lib/store/hooks";
import { myActions } from "@/lib/store/my-slice";
import { dateFormatter } from "@/utils/formatter";
import StatusTag from "../../general/status-tag";
import { GoChevronUp } from "react-icons/go";

export default function ReservationItemDetails({ reservation }: { reservation: ReservationDetails & { _id: string; } }) {

    const dispatch = useAppDispatch();

    const closeHandler = () => {
        dispatch(myActions.setActiveReservation(null));
    }
    return (
        <div className="p-4 bg-white rounded-lg" onClick={closeHandler}>
            <div className="pb-1 xs:pb-2 border-b border-slate-800/20 flex justify-between items-start cursor-pointer" onClick={closeHandler}>
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
            <div className="mt-4 grid grid-cols-2 gap-2">
                <p>Name</p>
                <p className="overflow-scroll">{reservation.name}</p>
                <p>Email</p>
                <p className="overflow-scroll">{reservation.email}</p>
                <p>Mobile Number</p>
                <p className="overflow-scroll">{reservation.mobileNumber}</p>
                <p>Date</p>
                <p className="overflow-scroll">{dateFormatter(new Date(reservation.selectedDate))}</p>
                <p>Time</p>
                <p className="overflow-scroll">{reservation.selectedTime}</p>
                <p>Number of Guests</p>
                <p className="overflow-scroll">{reservation.guests}</p>
                <p>Special Requests</p>
                <p className="overflow-scroll">{reservation.specialRequests || "None"}</p>
            </div>
        </div>
    )
}