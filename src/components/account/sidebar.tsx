"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import gear from "@/assets/icons/gear.svg";
import text from "@/assets/icons/text.svg";
import person from "@/assets/icons/person.svg";
import status from "@/assets/icons/status.svg";
import Image, { StaticImageData } from "next/image";

function LinkItem({ activePage, param, name, src, alt }: { activePage?: string, param: string, name: string, src: StaticImageData, alt: string }) {
    return (
        <Link href={`/account/${param}`} draggable={false} className={`max-md:rounded-full py-2 flex items-center px-2 rounded-md ${activePage === param ? "bg-amber-400/70" : "hover:bg-slate-100"}`}>
            <Image src={src} alt={alt} width={24} height={24} draggable={false} className="w-6 h-6" />
            <p className="max-md:hidden px-2">{name}</p>
        </Link>
    )
}

export default function Sidebar() {
    const pathname = usePathname();
    const activePage = pathname.split("/").pop();

    return (
        <div className="px-4 py-2 md:py-8 flex max-md:justify-around md:flex-col gap-1 font-lato text-lg tracking-wide max-lg:text-[0.9rem] transition-all">
            <LinkItem activePage={activePage} param="profile" name="Profile" src={person} alt="person" />
            <LinkItem activePage={activePage} param="orders" name="Orders" src={text} alt="text" />
            <LinkItem activePage={activePage} param="order-status" name="Order Status" src={status} alt="status" />
            <LinkItem activePage={activePage} param="settings" name="Settings" src={gear} alt="gear" />
        </div>
    )
}