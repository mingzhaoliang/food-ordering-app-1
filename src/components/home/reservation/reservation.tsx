"use client";

import Calendar from "./calendar";
import ReservationContactDetails from "./reservation-contact-details";
import ReservationSummary from "./reservation-summary";
import ReservationOptions from "./reservation-options";
import { useState } from "react";
import { Value } from "@/lib/crud/model-type";
import ConfirmDetails from "./confirm-details";
import { useAppSelector } from "@/lib/store/hooks";

export default function Reservation() {

    const defaultDate = new Date();
    // cannot reserve on the same day
    defaultDate.setDate(defaultDate.getDate() + 1);
    // cannot reserve on Sunday or Monday
    defaultDate.setDate(defaultDate.getDate() + (defaultDate.getDay() === 0 ? 2 : defaultDate.getDay() === 1 ? 1 : 0));
    // set time to 00:00:00
    defaultDate.setHours(0, 0, 0, 0);

    const [selectedDate, setSelectedDate] = useState<Value>(defaultDate);
    const { guests, selectedTime } = useAppSelector(state => state.reservation);


    return (
        <div id="reservation" className="relative w-11/12 lg:w-10/12 max-w-[80rem] mx-auto mt-10 sm:mt-10 md:mt-14 lg:mt-20 font-lato grid grid-rows-[auto_1fr] justify-items-center items-center gap-y-10 text-slate-800">
            <div className="max-w-[40rem]">
                <h2 className="p-2 xs:p-4 text-4xl font-portLligatSans text-center">Reservation</h2>
                <p className="p-2 xs:p-4 text-justify xs:text-center text-pretty">Kindly be aware that all tables reserved before 7 pm (Tuesday - Thursday) / 8 pm (Friday & Saturday) will be allotted for a duration of 2 hours only. If you need additional time, please get in touch with us directly, and we will endeavour to accommodate your request.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-12">
                <div className="w-full 3xl:max-w-[40rem] flex flex-col gap-4 items-center">
                    <ReservationSummary selectedDate={selectedDate as Date} guests={guests} selectedTime={selectedTime} />
                    <ReservationOptions selectedDate={selectedDate as Date} />
                    <Calendar selectedDate={selectedDate} changeHandler={setSelectedDate} />
                </div>
                <div className="w-full h-full 3xl:max-w-[40rem] xl:text-lg 2xl:text-xl flex flex-col items-center gap-2">
                    <ReservationContactDetails />
                </div>
            </div>
            <ConfirmDetails selectedDate={selectedDate as Date} />
        </div>
    );
}