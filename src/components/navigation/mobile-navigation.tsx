"use client";

import NavigationList from "./navigation-list";
import SignInButton from "./sign-in-button";
import IconButton from "../ui/icon-button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { navigationActions } from "@/lib/store/navigation-slice";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuActions } from "@/lib/store/menu-slice";

export default function MobileNavigation() {
	const pathname = usePathname();
	const { showHeaderBackground, showMenu } = useAppSelector(state => state.navigation);
	const dispatch = useAppDispatch();

	const activeCourse = pathname.includes("/menu/") ? pathname.split("/")[2] : "antipasti";

	const closeMenu = () => {
		dispatch(navigationActions.setShowMenu(false));
	}

	const toggleMenu = () => {
		dispatch(navigationActions.toggleMenu());
	}

	return (
		<div className={`md:hidden flex flex-col w-full mx-auto transition-all duration-300 ${showHeaderBackground || showMenu ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
			<div className="w-full flex justify-between items-center text-white">
				<Logo />
				<div className="pr-6 lg:pr-8 xl:pr-10 flex justify-center items-center gap-2 xs:gap-4 max-sm:text-md">
					<SignInButton onClick={closeMenu} />
					<Link
						href={`/menu/${activeCourse}`}
					>
						<IconButton src="/icons/cart2.svg" alt="Cart" onClick={() => { dispatch(menuActions.setShowCartModal(true)) }} />
					</Link>
					<IconButton src={showMenu ? "/icons/x.svg" : "/icons/hamburger.svg"} alt={showMenu ? "Close menu" : "Open menu"} className={`transition-transform ${showMenu ? "-rotate-90" : "rotate-0"}`} onClick={toggleMenu} />
				</div>
			</div>
			<div className={`font-lato flex flex-col items-center gap-[1.5rem] lg:gap-6 xl:gap-8 text-slate-800 text-md sm:text-base lg:text-lg transition-all ${showMenu ? "max-h-screen justify-around opacity-100 translate-y-0 p-6 lg:px-8 xl:px-10" : "max-h-0 p-0 bg-transparent justify-end opacity-0 -translate-y-[10%]"}`}>
				<NavigationList closeMenu={closeMenu} />
			</div>
		</div>
	);
}
