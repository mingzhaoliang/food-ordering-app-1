"use client";

import { getAvailableTimes } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { reservationActions } from "@/lib/store/reservation-slice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ReservationOptions({ selectedDate }: { selectedDate: Date }) {
    const { status } = useSession();
    const { guests, selectedTime, availableTimes } = useAppSelector((state) => state.reservation);
    const dispatch = useAppDispatch();

    const guestsChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(reservationActions.setGuests(Number(e.target.value)));
    };

    const timeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(reservationActions.setSelectedTime(e.target.value));
    };

    useEffect(() => {
        async function fetchAvailableTimes() {
            const times = await getAvailableTimes(selectedDate);
            const tableTimes = times[guests];
            const updatedTimes = Object.keys(tableTimes).filter((key) => tableTimes[key] > 0);

            dispatch(reservationActions.setAvailableTimes(updatedTimes));
            dispatch(reservationActions.setSelectedTime(updatedTimes[0] || "No Time Selected"));
        }

        fetchAvailableTimes();
    }, [dispatch, guests, selectedDate]);

    return (
        <div className="w-full xl:text-lg 2xl:text-xl flex items-center gap-2">
            <div className="w-1/2">
                <label htmlFor="numberOfGuests" className="block">
                    Guests
                </label>
                <select
                    name="numberOfGuests"
                    id="numberOfGuests"
                    className="block w-full rounded-lg shadow-md px-4 py-2 outline-none"
                    defaultValue={guests}
                    onChange={guestsChangeHandler}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="w-1/2">
                <label htmlFor="time" className="block">
                    Time
                </label>
                <select
                    name="time"
                    id="time"
                    className="block w-full rounded-lg shadow-md px-4 py-2 outline-none"
                    value={
                        selectedTime !== "No Time Selected"
                            ? selectedTime
                            : status === "loading"
                              ? "Loading..."
                              : "No time available"
                    }
                    onChange={timeChangeHandler}
                >
                    {selectedDate.getDay() > 1 && availableTimes.length > 0 ? (
                        availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))
                    ) : status === "loading" ? (
                        <option value="Loading...">Loading...</option>
                    ) : (
                        <option value="No time available" disabled>
                            No time available
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
}
