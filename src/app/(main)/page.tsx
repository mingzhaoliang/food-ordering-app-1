import Hero from "@/components/home/hero/hero";
import MenuOverview from "@/components/home/menu-overview/menu-preview";
import Reservation from "@/components/home/reservation/reservation";
import dynamic from "next/dynamic";

const MainBriefAbout = dynamic(() => import("@/components/home/brief-about/main-brief-about"));
const MobileBriefAbout = dynamic(() => import("@/components/home/brief-about/mobile-brief-about"));
const BriefContact = dynamic(() => import("@/components/home/brief-contact/brief-contact"));

export default async function Home() {
	return (
		<main>
			<div className="relative z-10 bg-white overflow-hidden">
				<Hero />
				<MenuOverview />
				<div className="w-11/12 lg:w-10/12 max-w-[80rem] mx-auto mt-10 sm:mt-10 md:mt-14 lg:mt-20">
					<Reservation />
				</div>
				<MainBriefAbout />
				<MobileBriefAbout />
			</div>

			<BriefContact />
		</main>
	);
}
