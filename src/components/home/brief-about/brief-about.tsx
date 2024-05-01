"use client";

import { briefAbout } from "@/utils/data";
import DisplayImage from "../../ui/display-image";
import Card from "./card";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
	{
		src: "/images/white-table-cloth-on-table.jpg",
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
		src: "/images/city-buildings-near-body-of-water-during-daytime.jpg",
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
];

export default function BriefAbout({
	picLeftX,
	picRightX,
	picLeftOpacity,
	picRightOpacity,
}: {
	picLeftX: any;
	picRightX: any;
	picLeftOpacity: any;
	picRightOpacity: any;
}) {
	return (
		<div
			id="brief-about"
			className="relative w-screen max-w-[80rem] mx-auto pb-20 pt-10 xs:pt-12 sm:pt-16 md:py-24 lg:pt-28 lg:pb-24 xl:pt-32 xl:pb-28 2xl:pt-36 2xl:pb-32 space-y-16 md:space-y-20 lg:space-y-28 2xl:space-y-36"
		>
			<div className="relative flex w-full justify-end overflow-hidden">
				<div className="absolute top-0 bottom-0 left-0 right-[calc(min(100vw,_80rem)_*_1/4)] -z-10 overflow-hidden transition-all duration-300">
					<DisplayImage
						src={images[0].src}
						alt={images[0].alt}
						imageRef={images[0].ref}
					/>
				</div>
				<motion.div
					style={{
						x: picRightX,
						opacity: picRightOpacity,
					}}
					className="w-1/2 md:w-[calc(min(100vw,_80rem)_*_11/24)] max-w-[60rem] px-4 lg:px-6 xl:pr-0 bg-white"
				>
					<Card
						title={briefAbout.story.title}
						description={briefAbout.story.description}
					/>
				</motion.div>
			</div>
			<div className="relative flex w-full justify-start overflow-hidden">
				<motion.div
					style={{
						x: picLeftX,
						opacity: picLeftOpacity,
					}}
					className="w-1/2 md:w-[calc(min(100vw,_80rem)_*_11/24)] max-w-[60rem] px-4 lg:px-6 xl:pl-0 bg-white"
				>
					<Card
						title={briefAbout.services.title}
						description={briefAbout.services.description}
					/>
				</motion.div>
				<div className="absolute top-0 bottom-0 right-0 left-[calc(min(100vw,_80rem)_*_1/4)] -z-10 overflow-hidden transition-all duration-300">
					<DisplayImage
						src={images[1].src}
						alt={images[1].alt}
						imageRef={images[1].ref}
					/>
				</div>
			</div>
		</div>
	);
}
