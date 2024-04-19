import { openingHours } from "@/utils/data";

export default function OpeningHous() {
    return (
        <div className="flex-1 p-4 space-y-2 bg-slate-100 shadow-md">
            <h2 className="md:text-lg">Opening Hours</h2>
            <div className="space-y-2 max-xs:text-sm max-md:text-md">
                {openingHours.map(openingHour => (
                    <div key={openingHour.day} className="flex justify-between items-start gap-3">
                        <p>{openingHour.day}:</p>
                        <div className="flex flex-col">
                            {openingHour.hours.map(hour => (
                                <p className="text-nowrap" key={hour}>{hour}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}