import Link from "next/link";
import NavigationList from "./navigation-list";
import SignIn from "./sign-in";
import Image from "next/image";
import { images } from "@/utils/data";

export default function MainNavigation({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="max-md:hidden flex justify-between items-center transition-all duration-300"
      style={{
        backgroundColor: isActive ? "hsla(0, 0%, 100%, 0.8)" : "transparent",
        backdropFilter: isActive ? "blur(4px)" : "none",
        boxShadow: isActive ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        color: isActive ? "#1e293b" : "#ffffff",
      }}
    >
      <Link
        href="/"
        draggable={false}
        className={`lg:w-3/12 lg:min-w-[22rem] px-4 py-4 flex gap-4 justify-center items-center ${isActive ? "" : "lg:shadow-md"}`}
      >
        <div className={`w-14 h-14 aspect-square rounded-full border-2 p-[0.1rem] flex justify-center items-center shadow animate-spin-medium border-slate-400 ${isActive ? "" : "max-lg:border-white max-lg:bg-white/50"}`}>
          <Image src={images.pizza.src} alt="Pizza" className={`rounded-full border p-2 object-cover border-slate-400 ${isActive ? "" : "max-lg:border-white"}`} />
        </div>
        <h1 className="text-3xl xl:text-4xl font-black tracking-wider font-cursive text-white lg:text-slate-800">Cucina Felice</h1>
      </Link>

      <div className="py-4 pr-6 lg:pr-8 xl:pr-10 font-lato flex gap-3 justify-around items-center text-[1.06rem] lg:text-lg lg:gap-5 xl:gap-8">
        <NavigationList />
        <SignIn isActive={isActive} />
      </div>
    </div>
  )
}