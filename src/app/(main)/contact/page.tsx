import ContactInfo from "@/components/contact/contact-info";
import OpeningHours from "@/components/contact/opening-hours";
import Map from "@/components/contact/map";

export default function ContactPage() {
	return (
		<div className="max-w-[80rem] w-full flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] gap-2 sm:gap-4 xl:gap-8">
			<Map />
			<div className="w-full min-w-fit p-2 font-lato md:max-w-96 flex max-sm:flex-wrap md:flex-col gap-4 justify-center">
				<ContactInfo />
				<OpeningHours />
			</div>
		</div>
	);
}
