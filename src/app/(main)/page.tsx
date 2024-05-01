import Hero from "@/components/home/hero/hero";
import MenuOverview from "@/components/home/menu-overview/menu-preview";
import MainBriefAbout from "@/components/home/brief-about/main-brief-about";
import MobileBriefAbout from "@/components/home/brief-about/mobile-brief-about";
import BriefContact from "@/components/home/brief-contact/brief-contact";
import Reservation from "@/components/home/reservation/reservation";

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
