"use client";

import ReactCalendar from "react-calendar";
import "./calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendar({
    selectedDate,
    changeHandler,
}: {
    selectedDate: Value;
    changeHandler: (value: Value) => void;
}) {

    const tileDisabled = ({
        activeStartDate,
        date,
        view,
    }: {
        activeStartDate: Date;
        date: Date;
        view: string;
    }) => {
        if (view === "month") {
            return (
                date.getDay() === 0 ||
                date.getDay() === 1 ||
                (date.getMonth() === new Date().getMonth() &&
                    date.getDate() === new Date().getDate())
            );
        }

        return false;
    };

    return (
        <div className="w-full rounded-lg shadow-md overflow-hidden px-4 py-2">
            <ReactCalendar
                locale="en-AU"
                value={selectedDate}
                onChange={changeHandler}
                calendarType="gregory"
                minDate={new Date()}
                maxDate={new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)}
                tileDisabled={tileDisabled}
            />
        </div>
    );
}
