import Link from "next/link";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <header className="fixed z-50 px-6 py-6 w-full lg:px-8 xl:px-10 transition-all">
      <div className="mx-auto flex justify-between items-center text-white">
        <Link
          href="/"
          className="text-2xl md:text-3xl lg:text-4xl font-black tracking-wider font-Pattaya transition-all"
        >
          Cucina Felice
        </Link>
        <MainNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
