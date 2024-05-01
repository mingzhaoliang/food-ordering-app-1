"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { navigationActions } from "@/lib/store/navigation-slice";
import { useEffect, useRef } from "react";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";
import { usePathname } from "next/navigation";
import { globalActions } from "@/lib/store/global-slice";

export default function Header() {
	const pathname = usePathname();
	const headerRef = useRef<HTMLHeadElement>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const styleHeader = () => {
			if (headerRef.current) {
				dispatch(
					navigationActions.setShowHeaderBackground(
						headerRef.current.clientHeight < window.scrollY
					)
				);
				dispatch(navigationActions.setShowMenu(false));
			}
		};

		styleHeader();

		window.addEventListener("scroll", styleHeader);
		window.addEventListener("resize", styleHeader);

		return () => {
			window.removeEventListener("scroll", styleHeader);
			window.removeEventListener("resize", styleHeader);
		};
	}, [dispatch, headerRef]);

	useEffect(() => {
		const newActivePage = pathname.split("/")[1] || "home";
		dispatch(globalActions.setActivePage(newActivePage));
	}, [dispatch, pathname]);

	return (
		<header ref={headerRef} className="fixed top-0 left-0 z-50 w-screen select-none">
			<MainNavigation />
			<MobileNavigation />
		</header>
	);
}
