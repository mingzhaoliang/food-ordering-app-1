"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function LinkItem({ activePage, param, name, src, alt }: { activePage?: string, param: string, name: string, src: string, alt: string }) {
    return (
        <Link href={`/account/${param}`} draggable={false} className={`rounded-3xl max-md:rounded-full p-2 max-[480px]:px-2 max-md:px-4 shadow md:flex-1 flex justify-center items-center ${activePage === param ? "bg-slate-800 text-white" : "bg-white hover:bg-slate-100"} transition-all`}>
            <Image src={src} alt={alt} width={24} height={24} draggable={false} className={`w-6 h-6 ${activePage === param ? "invert" : ""}`} />
            <p className="max-xs:hidden px-2">{name}</p>
        </Link>
    )
}

export default function Sidebar() {
    const pathname = usePathname();
    const activePage = pathname.split("/").pop();

    return (
        <div className="p-2 md:p-4 flex flex-grow justify-around gap-4 font-lato text-lg tracking-wide max-lg:text-[0.9rem] transition-all">
            <LinkItem activePage={activePage} param="profile" name="Profile" src="/icons/person.svg" alt="person" />
            <LinkItem activePage={activePage} param="orders" name="Orders" src="/icons/text.svg" alt="text" />
            <LinkItem activePage={activePage} param="settings" name="Settings" src="/icons/gear.svg" alt="gear" />
        </div>
    )
}