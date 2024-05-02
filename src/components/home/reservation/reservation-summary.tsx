import { dateFormatter } from "@/utils/formatter";
import { MdCalendarMonth } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { WiTime2 } from "react-icons/wi";

export default function ReservationSummary({
	selectedDate,
	guests,
	selectedTime,
}: {
	selectedDate: Date;
	guests: number;
	selectedTime: string;
}) {
	return (
		<div className="w-full flex flex-wrap justify-between gap-4 text-sm sm:text-md lg:text-base xl:text-lg 2xl:text-xl">
			<div className="flex items-center gap-2">
				<MdCalendarMonth className="text-xl sm:text-2xl flex-none" />
				<p className="text-nowrap">{dateFormatter(selectedDate)}</p>
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
	);
}
