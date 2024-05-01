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

	const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f1f5f9" offset="20%" />
      <stop stop-color="#e2e8f0" offset="50%" />
      <stop stop-color="#f1f5f9" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f1f5f9" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

	const toBase64 = (str: string) =>
		typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

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
				placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
