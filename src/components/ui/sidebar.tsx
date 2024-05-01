"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsedButton from "./button/collapsed-button";

export default function Sidebar({
	src,
	alt,
	href,
	iconSize,
	rotate,
	children,
}: {
	src: StaticImageData | string;
	alt: string;
	href: string;
	iconSize: string;
	rotate: boolean;
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<Link href={href} draggable={false}>
			<CollapsedButton
				src={src}
				alt={alt}
				expand={pathname.includes(href)}
				imageSize={iconSize}
				rotate={rotate}
			>
				{children}
			</CollapsedButton>
		</Link>
	);
}
