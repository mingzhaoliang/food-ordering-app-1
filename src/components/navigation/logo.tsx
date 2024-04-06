import { useAppSelector } from "@/lib/store/hooks";
import { images } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    const { showHeaderBackground, showMenu, activePage } = useAppSelector(state => state.navigation);

    return (
        <Link
            href="/"
            draggable={false}
            className={`lg:w-3/12 lg:min-w-[22rem] px-4 xs:px-6 py-2 flex gap-2 xs:gap-4 justify-center items-center ${activePage === "home" && !showHeaderBackground && "lg:shadow-md"}`}
        >
            <div className={`max-[380px]:hidden w-10 h-10 xs:w-12 xs:h-12 aspect-square rounded-full border-2 p-[0.1rem] flex justify-center items-center shadow animate-spin-medium ${activePage === "home" && "lg:border-slate-400"} ${showHeaderBackground || showMenu ? "border-slate-400" : "border-white bg-white/50"}`}>
                <Image src={images.pizza.src} alt="Pizza" className={`p-[0.4rem] object-cover rounded-full border  ${activePage === "home" && "lg:border-slate-400"} ${showHeaderBackground || showMenu ? "border-slate-400" : "border-white"}`} />
            </div>
            <h1 className={`text-lg min-[380px]:text-[1.35rem] xs:text-2xl sm:text-3xl xl:text-4xl font-black tracking-wider font-cursive ${showHeaderBackground || showMenu ? "text-slate-800" : `text-white ${activePage === "home" && "lg:text-slate-800"}`}`}>Cucina Felice</h1>
        </Link>
    )
}