"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsedButton from "./collapsed-button";

export default function Sidebar({ src, href, text, iconSize, rotate }: { src: StaticImageData | string, href: string, text: string, iconSize: string, rotate: boolean }) {
    const pathname = usePathname();
    // const activeSection = pathname.split("/")[2];

    return (
        <Link href={href} draggable={false}>
            <CollapsedButton src={src} alt={text} text={text} expand={pathname.includes(href)} imageSize={iconSize} rotate={rotate} />
        </Link>
    )
}