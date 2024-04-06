"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CollapsedButton from "../ui/collapsed-button";

export default function FoodCourseSidebar({ src, id, course }: { src: StaticImageData | string, id: string, course: string }) {
    const pathname = usePathname();
    const activeCourse = pathname.split("/")[2];

    return (
        <Link href={`/menu/${id}`} draggable={false}>
            <CollapsedButton src={src} alt={id} text={course} expand={activeCourse === id} />
        </Link>
    )
}