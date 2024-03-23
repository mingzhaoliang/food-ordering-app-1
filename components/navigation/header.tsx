import Link from "next/link";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <header className="fixed z-50 w-full lg:px-8 xl:px-10 transition-all select-none">
      <MainNavigation />
      <MobileNavigation />
    </header>
  );
}
