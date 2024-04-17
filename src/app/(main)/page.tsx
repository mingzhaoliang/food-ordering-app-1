import Hero from "@/components/home/hero/hero";
import { getHeroImages } from "@/lib/actions";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import Link from "next/link";
import MenuOverview from "@/components/home/menu-overview/menu-preview";
import ContactInfo from "@/components/home/contact/contact-info";
import MainBriefAbout from "@/components/home/brief-about/main-brief-about";
import MobileBriefAbout from "@/components/home/brief-about/mobile-brief-about";

const itemIds = [
	"bruschetta",
	"frittata",
	"spaghetti-bolognese",
	"risotto-ai-funghi",
	"cannoli",
];

export default async function Home() {
	const images = await getHeroImages(itemIds);
	const heroImages = images.map((image) => {
		return {
			src: getCloudinaryUrl(`menu/${image.course}/${image.publicId}`),
			alt: image.name,
			reference: <>Photo by <Link href={image.reference.owner_url} className="underline">{image.reference.owner}</Link> on <Link href={image.reference.url} className="underline">{image.reference.platform}</Link></>
		};
	});

	return (
		<main>
			<div className="relative z-10 bg-white">
				<Hero images={heroImages} />
				<MenuOverview />
				<MainBriefAbout />
				<MobileBriefAbout />
			</div>

			<ContactInfo />
		</main>
	);
}
