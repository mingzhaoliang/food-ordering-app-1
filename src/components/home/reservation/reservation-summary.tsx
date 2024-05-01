import { dateFormatter } from "@/utils/formatter";
import Image from "next/image";

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
				<div className="relative flex-none w-5 h-5 xl:w-6 xl:h-6">
					<Image src="/icons/calendar3.svg" alt="calendar" fill sizes="100vw" />
				</div>
				<p className="text-nowrap">{dateFormatter(selectedDate)}</p>
			</div>
			<div className="flex items-center gap-2">
				<div className="relative flex-none w-5 h-5 xl:w-6 xl:h-6">
					<Image src="/icons/people-fill.svg" alt="calendar" fill sizes="100vw" />
				</div>
				<p className="text-nowrap">{guests}</p>
			</div>
			<div className="flex items-center gap-2">
				<div className="relative flex-none w-5 h-5 xl:w-6 xl:h-6">
					<Image src="/icons/clock.svg" alt="calendar" fill sizes="100vw" />
				</div>
				<p className="text-nowrap">{selectedTime}</p>
			</div>
		</div>
	);
}
