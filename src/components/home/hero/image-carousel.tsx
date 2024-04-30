"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

const getTranslation1 = (index: number, currentIndex: number, imagesNumber: number) => {
	let x = (index - currentIndex) * 100;

	if (currentIndex === imagesNumber * 2 - 1) {
		x = (index + 1) * 100;
	}
	return x;
};

const getTranslation2 = (index: number, currentIndex: number, imagesNumber: number) => {
	return (
		(index +
			imagesNumber -
			(currentIndex <= 1 ? currentIndex + imagesNumber * 2 : currentIndex)) *
		100
	);
};

export default function ImageCarousel({
	images,
}: {
	images: { src: StaticImageData | string; alt: string; reference: React.ReactNode }[];
}) {
	const concatImages = [...images, ...images];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const mouseOverHandler = () => {
		setIsHovered(true);
	};
	const mouseOutHandler = () => {
		setIsHovered(false);
	};

	const jumpToImage = (index: number) => {
		if (index === currentImageIndex % images.length) return;
		setCurrentImageIndex(index + Math.floor(currentImageIndex / images.length) * images.length);
	};

	useEffect(() => {
		const intervel = setInterval(() => {
			setCurrentImageIndex((prevIndex) => {
				return (prevIndex + 1) % (concatImages.length * 2);
			});
		}, 1000 * 5);

		return () => clearInterval(intervel);
	}, [concatImages.length, currentImageIndex]);

	return (
		<>
			{concatImages.map((image, index) => {
				return (
					<Image
						key={`${image.alt}${index}`}
						src={image.src}
						alt={image.alt}
						draggable={false}
						fill
						className="absolute w-full h-full object-cover object-center transition-transform duration-1000"
						style={{
							display:
								currentImageIndex > concatImages.length + 1 &&
								currentImageIndex < concatImages.length * 2 - 1
									? "none"
									: "block",
							transform: `translateX(${getTranslation1(
								index,
								currentImageIndex,
								concatImages.length
							)}%)`,
						}}
						priority
						onMouseOver={mouseOverHandler}
						onMouseOut={mouseOutHandler}
					/>
				);
			})}
			{concatImages.map((image, index) => {
				return (
					<Image
						key={`${image.alt}${index}`}
						src={image.src}
						alt={image.alt}
						draggable={false}
						fill
						className="absolute w-full h-full object-cover object-center transition-transform duration-1000"
						style={{
							display:
								currentImageIndex > 1 && currentImageIndex < concatImages.length - 1
									? "none"
									: "block",
							transform: `translateX(${getTranslation2(
								index,
								currentImageIndex,
								concatImages.length
							)}%)`,
						}}
						priority
						onMouseOver={mouseOverHandler}
						onMouseOut={mouseOutHandler}
					/>
				);
			})}
			<p
				className="absolute left-0 bottom-0 px-4 bg-white/50 text-sm"
				style={{ display: isHovered ? "block" : "none" }}
				onMouseOver={mouseOverHandler}
				onMouseOut={mouseOutHandler}
			>
				{concatImages[currentImageIndex] ? concatImages[currentImageIndex].reference : ""}
			</p>

			<div className="absolute w-full bottom-[10%] flex justify-center transition-all">
				<div className="mx-auto flex gap-4 md:gap-6 lg:gap-8">
					{images.map((_, index) => {
						return (
							<div
								key={index}
								className={
									"w-[0.35rem] h-[0.35rem] md:w-2 md:h-2 rounded-full bg-white cursor-pointer transition-all duration-500"
								}
								style={
									currentImageIndex % images.length === index
										? {
												backgroundColor: "hsl(0, 100%, 80%)",
												transform: "scale(1.75)",
											}
										: currentImageIndex % images.length === index - 1 ||
											  currentImageIndex % images.length === index + 1
											? {
													backgroundColor: "hsl(0, 100%, 90%)",
													transform: "scale(1.35)",
												}
											: {
													backgroundColor: "hsl(0, 0%, 100%)",
													transform: "scale(1)",
												}
								}
								onClick={() => jumpToImage(index)}
							></div>
						);
					})}
				</div>
			</div>
		</>
	);
}
