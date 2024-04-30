"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function DisplayImage({
	src,
	alt,
	imageRef,
	width,
	height,
	priority,
}: {
	src: StaticImageData | string;
	alt: string;
	imageRef: React.ReactNode;
	width?: number;
	height?: number;
	priority?: boolean;
}) {
	const [isHovered, setIsHovered] = useState(false);

	const mouseOverHandler = () => {
		setIsHovered(true);
	};

	const mouseOutHandler = () => {
		setIsHovered(false);
	};

	return (
		<div className="relative w-full h-full overflow-hidden">
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				fill={!width || !height}
				sizes="100% 100%"
				draggable={false}
				className="w-full h-full object-cover object-center"
				onMouseOver={mouseOverHandler}
				onMouseOut={mouseOutHandler}
				priority={priority || false}
			/>
			<p
				className="absolute px-4 bg-white/50 text-sm bottom-0 left-0"
				style={{ display: isHovered ? "block" : "none" }}
				onMouseOver={mouseOverHandler}
				onMouseOut={mouseOutHandler}
			>
				{imageRef}
			</p>
		</div>
	);
}
