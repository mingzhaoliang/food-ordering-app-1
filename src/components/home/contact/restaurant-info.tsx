import OpeningHours from "./opening-hours";
import ContactInfo from "./contact-info";

export default function RestaurantInfo() {
    return (
        <div className="font-lato md:max-w-96 flex flex-col gap-4">
            <h1 className="text-white text-4xl xl:text-5xl font-portLligatSans pb-1">Contact Us</h1>
            <div className="flex max-sm:flex-wrap md:flex-col gap-2">
                <ContactInfo />
                <OpeningHours />
            </div>
        </div>
    );
}
