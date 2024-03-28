import Hero from "@/components/home/hero";
import BriefAbout from "@/components/home/brief-about";
import { images } from "@/utils/data";

const heroImages = [images.hero0, images.hero1, images.hero2, images.hero3, images.hero4];

export default function Home() {

	return (
		<main>
			<Hero images={heroImages} />
			<BriefAbout />
		</main>
	);
}
