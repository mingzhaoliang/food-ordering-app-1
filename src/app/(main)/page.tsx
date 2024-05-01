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
			<div className="relative z-10 bg-white">
				<Hero />
				<MenuOverview />
				<Reservation />
				<MainBriefAbout />
				<MobileBriefAbout />
			</div>

			<BriefContact />
		</main>
	);
}
