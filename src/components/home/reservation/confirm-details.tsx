"use client";

import Details from "@/components/general/reservation-details";
import Modal from "@/components/ui/modal";
import { addReservation, getAvailableTimes } from "@/lib/actions";
import { ReservationDetails } from "@/lib/crud/model-type";
import { globalActions } from "@/lib/store/global-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { reservationActions } from "@/lib/store/reservation-slice";
import { dateFormatter } from "@/utils/formatter";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

function FormButtons({ onCancel }: { onCancel: () => void }) {
    const { pending } = useFormStatus();

    return (
        <>
            <button
                disabled={pending}
                type="button"
                className={`${pending ? "bg-slate-100/80 text-slate-500 cursor-not-allowed" : "bg-slate-100 text-slate-800 hover:bg-slate-200"} rounded-md px-4 py-2 transition-colors outline-none`}
                onClick={onCancel}
            >
                Cancel
            </button>
            <button
                disabled={pending}
                type="submit"
                className={`${pending ? "bg-teal-700/60 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-900"} text-white rounded-md px-4 py-2 transition-colors outline-none`}
            >
                {pending ? (
                    <div className="mx-auto w-5 h-5 rounded-full border-white border-l-2 border-b-2 border-t-transparent animate-spin" />
                ) : (
                    "Confirm"
                )}
            </button>
        </>
    );
}

export default function ConfirmDetails({ selectedDate }: { selectedDate: Date }) {
    const { guests, selectedTime, contactDetails } = useAppSelector((state) => state.reservation);
    const { readyToSubmit } = useAppSelector((state) => state.reservation);
    const dispatch = useAppDispatch();

    const reservationDetails: ReservationDetails = {
        selectedDate,
        guests,
        selectedTime,
        ...contactDetails,
    };
    const addReservationWithDetails = addReservation.bind(null, reservationDetails);

    const [state, formAction] = useFormState(addReservationWithDetails, {
        status: "",
        message: "",
    });

    const cancelHandler = () => {
        dispatch(reservationActions.setReadyToSubmit(false));
    };

    useEffect(() => {
        async function fetchAvailableTimes() {
            const times = await getAvailableTimes(selectedDate);
            const tableTimes = times[guests];
            const updatedTimes = Object.keys(tableTimes).filter((key) => tableTimes[key] > 0);

            dispatch(reservationActions.setAvailableTimes(updatedTimes));
            dispatch(reservationActions.setSelectedTime(updatedTimes[0] || "No Time Selected"));
        }

        if (state.status) {
            if (state.status === "success") {
                dispatch(reservationActions.clearContactDetails());
            }

            dispatch(reservationActions.setReadyToSubmit(false));
            dispatch(globalActions.setToast({ status: state.status, message: state.message }));
            fetchAvailableTimes();
        }
    }, [dispatch, guests, selectedDate, state]);

    return (
        <Modal open={readyToSubmit} onClose={cancelHandler} onCancel>
            <div className="max-w-[40rem] overflow-hidden text-nowrap p-6 xl:text-lg 2xl:text-xl font-lato space-y-5">
                <h2 className="text-2xl">Confirm Your Reservation Details Below</h2>
                <Details {...reservationDetails} />
                <form className="pt-2 grid grid-cols-2 gap-2" action={formAction}>
                    <FormButtons onCancel={cancelHandler} />
                </form>
            </div>
        </Modal>
    );
}
