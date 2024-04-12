import Hero from "@/components/home/hero";
import BriefAbout from "@/components/home/brief-about";
import { getHeroImages } from "@/lib/actions";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import Link from "next/link";

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
			<Hero images={heroImages} />
			<BriefAbout />
		</main>
	);
}

// Photo by Valeria Boltneva: https://www.pexels.com/photo/yummy-cannoli-dessert-on-plate-7474117/
