"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsedButton from "./collapsed-button";

export default function Sidebar({ src, alt, href, iconSize, rotate, children }: { src: StaticImageData | string, alt: string, href: string, iconSize: string, rotate: boolean, children: React.ReactNode }) {
    const pathname = usePathname();
    // const activeSection = pathname.split("/")[2];

    return (
        <Link href={href} draggable={false}>
            <CollapsedButton src={src} alt={alt} expand={pathname.includes(href)} imageSize={iconSize} rotate={rotate}>
                {children}
            </CollapsedButton>
        </Link>
    )
}