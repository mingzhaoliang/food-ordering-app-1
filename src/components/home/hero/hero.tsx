import ImageCarousel from "./image-carousel";
import WelcomeMessage from "./welcome-message";
import Link from "next/link";

const heroImages = [
	{
		src: "/images/bruschetta.jpg",
		alt: "Bruschetta",
		reference: (
			<>
				Photo by{" "}
				<Link href="https://www.pexels.com/@shameel-mukkath-3421394/" className="underline">
					Shameel mukkath
				</Link>{" "}
				on{" "}
				<Link
					href="https://www.pexels.com/photo/bruschetta-with-tomatoes-black-olives-and-basil-5639411/"
					className="underline"
				>
					Pexels
				</Link>
			</>
		),
	},
	{
		src: "/images/frittata.jpg",
		alt: "Frittata",
		reference: (
			<>
				Photo by{" "}
				<Link href="https://www.pexels.com/@shameel-mukkath-3421394/" className="underline">
					Shameel mukkath
				</Link>{" "}
				on{" "}
				<Link
					href="https://www.pexels.com/photo/a-close-up-shot-of-a-frittata-in-a-skillet-5639249/"
					className="underline"
				>
					Pexels
				</Link>
			</>
		),
	},
	{
		src: "/images/spaghetti-bolognese.jpg",
		alt: "Spaghetti Bolognese",
		reference: (
			<>
				Photo by{" "}
				<Link
					href="https://unsplash.com/@dacakockica?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					className="underline"
				>
					Danijela Prijovic
				</Link>{" "}
				on{" "}
				<Link
					href="https://unsplash.com/photos/pasta-with-red-sauce-on-white-ceramic-round-plate-qits91IZv1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					className="underline"
				>
					Unsplash
				</Link>
			</>
		),
	},
	{
		src: "/images/risotto-ai-funghi.jpg",
		alt: "Risotto ai Funghi",
		reference: (
			<>
				Photo by{" "}
				<Link href="https://www.pexels.com/@max-griss-16866522/" className="underline">
					Max Griss
				</Link>{" "}
				on{" "}
				<Link
					href="https://www.pexels.com/photo/photo-of-risotto-on-a-black-and-white-plate-6406460/"
					className="underline"
				>
					Pexels
				</Link>
			</>
		),
	},
	{
		src: "/images/cannoli.jpg",
		alt: "Cannoli",
		reference: (
			<>
				Photo by{" "}
				<Link href="https://www.pexels.com/@valeriya/" className="underline">
					Valeria Boltneva
				</Link>{" "}
				on{" "}
				<Link
					href="https://www.pexels.com/photo/yummy-cannoli-dessert-on-plate-7474117/"
					className="underline"
				>
					Pexels
				</Link>
			</>
		),
	},
];

export default function Hero() {
	return (
		<div className="relative w-screen lg:h-screen lg:min-h-[40rem] overflow-x-hidden z-0 flex flex-col max-lg:items-center max-lg:gap-8 lg:flex-row-reverse lg:shadow">
			<div className="relative w-full z-0 max-lg:h-[calc(100vh_*_9/15)] max-lg:min-h-60 lg:w-9/12 transition-none">
				<ImageCarousel images={heroImages} />
			</div>
			<div className="relative w-full z-10 lg:w-3/12 lg:min-w-[22rem] bg-white">
				<WelcomeMessage />
			</div>
			<div className="lg:hidden w-5/12 flex justify-center items-center gap-4">
				<div className="flex-1 border-t border-slate-600"></div>
				<div className="shrink rounded-full border border-slate-600"></div>
				<div className="flex-1 border-t border-slate-600"></div>
			</div>
		</div>
	);
}
