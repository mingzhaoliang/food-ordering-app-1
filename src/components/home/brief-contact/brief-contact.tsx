import ContactInfo from "../../contact/contact-info";
import Map from "../../contact/map";
import OpeningHours from "../../contact/opening-hours";

export default function BriefContact() {
	return (
		<div className="sm:sticky z-0 left-0 bottom-0 bg-teal-700">
			<div className="px-4 py-6 sm:px-6 sm:py-8 md:p-8 lg:p-10 max-w-[80rem] w-full min-w-fit mx-auto flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] justify-items-center gap-6 md:gap-8">
				<Map />
				<div className="font-lato md:max-w-96 flex flex-col gap-4">
					<h1 className="text-white text-4xl xl:text-5xl font-portLligatSans pb-1">
						Contact Us
					</h1>
					<div className="flex max-sm:flex-wrap md:flex-col gap-2">
						<ContactInfo />
						<OpeningHours />
					</div>
				</div>
			</div>
		</div>
	);
}
