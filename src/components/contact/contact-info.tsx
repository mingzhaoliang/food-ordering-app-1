import { restaurantNumber } from "@/utils/data";
import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";

export default function ContactInfo() {
    return (
        <div className="flex-1 px-2 py-4 space-y-2 bg-slate-100 shadow-md">
            <div className="flex items-start gap-2">
                <MdLocationPin className="text-xl md:text-2xl text-teal-700 flex-none" />
                <p className="max-xs:text-sm max-md:text-md">123 Demo Street, Melbourne VIC 3000</p>
            </div>
            <div className="flex items-start gap-2">
                <MdLocalPhone className="text-xl md:text-2xl text-teal-700 flex-none" />
                <p className="max-xs:text-sm max-md:text-md">{restaurantNumber}</p>
            </div>
            <div className="flex items-start gap-2">
                <MdEmail className="text-xl md:text-2xl text-teal-700 flex-none" />
                <p className="max-xs:text-sm max-md:text-md">{`info@cucinafelice.com`}</p>
            </div>
        </div>
    );
}
