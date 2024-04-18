import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";

export default function ContactInfo() {
    return (
        <div className="flex-1 px-2 py-4 space-y-2 bg-slate-100 shadow-md">
            <div className="flex items-start gap-2">
                <MdLocationPin className="text-2xl text-teal-700" />
                <p>123 Demo Street, Melbourne VIC 3000</p>
            </div>
            <div className="flex items-start gap-2">
                <MdLocalPhone className="text-2xl text-teal-700" />
                <p>{`(03) 1234 5678`}</p>
            </div>
            <div className="flex items-start gap-2">
                <MdEmail className="text-2xl text-teal-700" />
                <p>{`info@demo.com`}</p>
            </div>
        </div>
    )
}