import { useAppSelector } from "@/lib/store/hooks";
import { restaurantName } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    const { showHeaderBackground, showMenu, activePage } = useAppSelector(state => state.navigation);

    const borderClasses = activePage === "home" ? `lg:border-slate-400 ${showHeaderBackground || showMenu ? "border-slate-400" : "border-white"}` : "border-slate-400";
    const titleClasses = activePage === "home" ? `lg:text-slate-800 ${showHeaderBackground || showMenu ? "text-slate-800" : "text-white"}` : "text-slate-800";

    return (
        <Link
            href="/"
            draggable={false}
            className={`lg:w-3/12 lg:min-w-[22rem] px-4 xs:px-6 py-2 flex gap-2 xs:gap-4 justify-center items-center ${activePage === "home" && !showHeaderBackground && "lg:shadow-md"}`}
        >
            <div className={`rounded-full border-2 p-[0.2rem] shadow animate-spin-medium ${borderClasses} ${showHeaderBackground || showMenu ? "" : "bg-white/50"}`}>
                <div className={`relative max-xxs:hidden w-10 h-10 xs:w-12 xs:h-12 aspect-square rounded-full border ${borderClasses}`}>
                    <Image src="/icons/pizza.png" alt="Pizza" fill sizes="100% 100%" className={`object-cover rounded-full p-[0.4rem]`} />
                </div>
            </div>
            <h1 className={`text-lg min-xxs:text-[1.35rem] xs:text-2xl sm:text-3xl xl:text-4xl font-black tracking-wider font-cursive ${titleClasses}`}>{restaurantName}</h1>
        </Link>
    )
}