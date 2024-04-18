import Map from "./map";
import RestaurantInfo from "./restaurant-info";

export default function ContactBrief() {

    return (
        <div className="sm:sticky z-0 left-0 bottom-0 bg-teal-700">
            <div className="px-4 py-6 sm:px-6 sm:py-8 md:p-8 lg:p-10 max-w-[80rem] w-full mx-auto flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] justify-items-center gap-6 md:gap-8">
                <Map />
                <RestaurantInfo />
            </div>
        </div>
    )
}