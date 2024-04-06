"use client";

import NavigationList from "./navigation-list";
import SignInButton from "./sign-in-button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Logo from "./logo";
import IconButton from "../ui/icon-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuActions } from "@/lib/store/menu-slice";

export default function MainNavigation() {
	const { showHeaderBackground } = useAppSelector(state => state.navigation);
	const { showCartModal } = useAppSelector(state => state.menu);
	const pathname = usePathname();

	const activeCourse = pathname.includes("/menu/") ? pathname.split("/")[2] : "antipasti";
	const dispatch = useAppDispatch();

	return (
		<div className={`max-md:hidden flex justify-between items-center transition-all duration-300 ${showHeaderBackground ? "bg-white/80 backdrop-blur-sm shadow-md text-slate-800" : "bg-transparent text-white"}`}>
			<Logo />
			<div className="pr-6 lg:pr-8 xl:pr-10 font-lato text-nowrap text-ellipsis flex gap-3 justify-around items-center text-[1.06rem] lg:text-lg lg:gap-5 xl:gap-8">
				<NavigationList />
				<div className="flex gap-2 items-center">
					<Link
						href={`/menu/${activeCourse}`}
						className="lg:hidden"
					>
						<IconButton src="/icons/cart2.svg" alt="Cart" onClick={() => { dispatch(menuActions.setShowCartModal(true)) }} />
					</Link>
					<SignInButton />
				</div>
			</div>
		</div>
	)
}