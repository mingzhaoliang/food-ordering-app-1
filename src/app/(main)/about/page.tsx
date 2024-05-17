import FilledButton from "@/components/ui/button/filled-button";
import DisplayImage from "@/components/ui/display-image";
import { restaurantName } from "@/utils/data";
import Link from "next/link";

const images = [
	{
		src: "/images/white-table-cloth-on-table.webp",
		alt: "White table cloth on table",
		ref: (
			<>
				Photo by{" "}
				<Link href="https://unsplash.com/@novosonce?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
					Danilo
				</Link>{" "}
				on{" "}
				<Link href="https://unsplash.com/photos/white-table-cloth-on-table-2NKAxzGPxOc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
					Unsplash
				</Link>
			</>
		),
	},
	{
		src: "/images/city-buildings-near-body-of-water-during-daytime.webp",
		alt: "City buildings near body of water during daytime",
		ref: (
			<>
				Photo by{" "}
				<Link href="https://unsplash.com/@julie_soul?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
					Julia Solonina
				</Link>{" "}
				on{" "}
				<Link href="https://unsplash.com/photos/city-buildings-near-body-of-water-during-daytime-IilYfjhavow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
					Unsplash
				</Link>
			</>
		),
	},
	{
		src: "/images/people-in-cafe-on-street-in-city.webp",
		alt: "People in cafe on street in city",
		ref: (
			<>
				Photo by <Link href="https://www.pexels.com/@vardarious/">Volkan Vardar</Link> on{" "}
				<Link href="https://www.pexels.com/photo/people-in-cafe-on-street-in-city-3888048/">
					Pexels
				</Link>
			</>
		),
	},
	{
		src: "/images/unrecognizable-man-cooking-pasta-on-counter-in-kitchen.webp",
		alt: "Unrecognizable man cooking pasta on counter in kitchen",
		ref: (
			<>
				Photo by <Link href="https://www.pexels.com/@gary-barnes/">Gary Barnes</Link> on{" "}
				<Link href="https://www.pexels.com/photo/unrecognizable-man-cooking-pasta-on-counter-in-kitchen-6249019/">
					Pexels
				</Link>
			</>
		),
	},
];

export default function AboutPage() {
	return (
		<div className="relative min-h-screen space-y-8 xs:space-y-12 md:space-y-20 pb-20">
			<div className="relative w-screen h-64 xs:h-80 flex justify-center items-center">
				<div className="absolute inset-0 -z-10">
					<DisplayImage
						src={images[0].src}
						alt={images[0].alt}
						imageRef={images[0].ref}
					/>
				</div>
				<h1 className="text-center text-4xl xs:text-5xl md:text-6xl text-white font-portLligatSans">
					About Us
				</h1>
			</div>
			<div className="mx-auto w-10/12 lg:w-8/12 xl:w-7/12 max-w-[60rem] text-center space-y-10">
				<p className="font-lato text-balance tracking-wide sm:leading-relaxed xl:text-lg xl:leading-loose">
					Our journey began with a love for Italian cuisine and a desire to share it with
					the world. Founded in 2010, {restaurantName} has been serving authentic Italian
					dishes crafted with care and tradition. From our humble beginnings to becoming a
					beloved dining destination, every step of our journey has been filled with love,
					passion, and dedication to excellence.
				</p>
			</div>
			<div className="mx-auto w-10/12 lg:w-8/12 xl:w-7/12 max-w-[60rem] space-y-10">
				<h2 className="font-portLligatSans text-4xl md:text-5xl text-center">Our Chef</h2>
				<div className="mx-auto grid max-sm:grid-rows-[1fr_auto] sm:grid-cols-2 gap-10 xl:gap-16">
					<div className="relative w-full h-full max-sm:h-96">
						<DisplayImage
							src={images[3].src}
							alt={images[3].alt}
							imageRef={images[3].ref}
						/>
					</div>
					<p className="font-lato text-justify text-balance tracking-wide sm:leading-relaxed xl:text-lg xl:leading-loose">
						Chef Mysterious, the creative genius behind our delectable creations, with
						20 years of culinary experience and a deep-rooted passion for Italian
						cuisine, he brings a wealth of knowledge and expertise to our kitchen. From
						traditional favourites to innovative twists, each dish is meticulously
						crafted to tantalise your taste buds and transport you to the heart of
						Italy.
					</p>
				</div>
			</div>
			<div className="mx-auto w-10/12 lg:w-8/12 xl:w-7/12 max-w-[60rem] space-y-10">
				<h2 className="font-portLligatSans text-4xl md:text-5xl text-center">
					Mission and Values
				</h2>
				<div className="font-lato text-justify tracking-wide sm:leading-relaxed xl:text-lg xl:leading-loose space-y-3">
					<p>
						At {restaurantName}, our mission is simple: to provide an unforgettable
						dining experience that celebrates the rich flavours and traditions of
						Italian cuisine. We are committed to sourcing the finest ingredients,
						delivering impeccable service, and creating a welcoming atmosphere where
						every guest feels like family.
					</p>
					<p>
						Our values of quality, integrity, and hospitality guide everything we do,
						ensuring that every visit to {restaurantName} is a memorable one.
					</p>
				</div>
				<div className="relative w-full h-96 max-sm:h-96">
					<DisplayImage
						src={images[2].src}
						alt={images[2].alt}
						imageRef={images[2].ref}
					/>
				</div>
			</div>
			<div className="mx-auto w-10/12 lg:w-8/12 xl:w-5/12 max-w-[60rem] border-2 border-slate-800 p-1">
				<div className="border border-slate-800 p-4 space-y-6">
					<h2 className="font-portLligatSans text-3xl md:text-4xl text-center">
						Ready to experience the taste of Italy?
					</h2>
					<p className="w-full mx-auto font-lato text-center tracking-wide sm:leading-relaxed xl:text-lg xl:leading-loose max-w-[30rem]">
						{`Explore our menu, make a reservation, or visit us today. We can't wait to welcome you to ${restaurantName}!`}
					</p>
					<div className="flex-1 flex max-xs:flex-col justify-center gap-4 md:gap-8">
						<Link href="/menu" className="flex-1">
							<FilledButton colour="slate" type="button">
								Explore Our Menu
							</FilledButton>
						</Link>
						<Link href="/reservation" className="flex-1">
							<FilledButton colour="slate" type="button">
								Make a Reservation
							</FilledButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
