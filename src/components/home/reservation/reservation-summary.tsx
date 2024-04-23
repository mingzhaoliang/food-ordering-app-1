"use client";

import { dateFormatter } from "@/utils/formatter";
import { MdCalendarMonth } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { WiTime2 } from "react-icons/wi";
import { useAppSelector } from "@/lib/store/hooks";

export default function ReservationSummary({ selectedDate }: { selectedDate: Date }) {
    const { guests, selectedTime } = useAppSelector(state => state.reservation);

    return (
        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] xs:grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))] justify-items-start xs:justify-items-center gap-2 text-sm sm:text-md lg:text-base xl:text-lg 2xl:text-xl">
            <div className="flex items-center gap-2">
                <MdCalendarMonth className="text-xl sm:text-2xl flex-none" />
                <p className="text-nowrap">{!!selectedDate && dateFormatter(selectedDate as Date)}</p>
            </div>
            <div className="flex items-center gap-2">
                <BsFillPeopleFill className="text-xl sm:text-2xl flex-none" />
                <p className="text-nowrap">{guests}</p>
            </div>
            <div className="flex items-center gap-2">
                <WiTime2 className="text-xl sm:text-2xl flex-none" />
                <p className="text-nowrap">{selectedTime}</p>
            </div>
        </div>
    )
}