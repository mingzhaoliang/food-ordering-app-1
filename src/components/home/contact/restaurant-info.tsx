import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";
import OpeningHours from "./opening-hours";

export default function RestaurantInfo() {
    return (
        <div className="font-lato md:max-w-96 flex flex-col gap-4">
            <h1 className="text-white text-4xl xl:text-5xl font-portLligatSans pb-1">Contact Us</h1>
            <div className="flex max-sm:flex-wrap md:flex-col gap-2">
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
                <OpeningHours />
            </div>
        </div>
    )
}