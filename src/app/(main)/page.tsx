import Hero from "@/components/home/hero";
import BriefAbout from "@/components/home/brief-about";
// import { images } from "@/utils/data";
import { heroImages } from "@/utils/images-data";

const images = Object.values(heroImages);

export default function Home() {

	return (
		<main>
			<Hero images={images} />
			<BriefAbout />
		</main>
	);
}
