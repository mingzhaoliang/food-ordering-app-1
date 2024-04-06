"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { navigationActions } from "@/lib/store/navigation-slice";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
    const headerRef = useRef<HTMLHeadElement>(null);
    const dispatch = useAppDispatch();
    const pathname = usePathname();

    useEffect(() => {

        const styleHeader = () => {
            if (headerRef.current) {
                dispatch(navigationActions.setShowHeaderBackground(headerRef.current.clientHeight < window.scrollY));
                dispatch(navigationActions.setShowMenu(false));
            }
        }

        styleHeader();

        window.addEventListener("scroll", styleHeader);
        window.addEventListener("resize", styleHeader);

        return () => {
            window.removeEventListener("scroll", styleHeader);
            window.removeEventListener("resize", styleHeader);
        }
    }, [headerRef]);

    useEffect(() => {

        const activePage = pathname.split("/")[1] || "home";
        dispatch(navigationActions.setActivePage(activePage));

    }, [pathname])

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 z-50 w-screen select-none"
        >
            {children}
        </header>
    );
}
