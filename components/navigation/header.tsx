"use client";

import { useEffect, useRef, useState } from "react";
import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  const [active, setActive] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    headerRef.current && setActive(headerRef.current.clientHeight < window.scrollY);

    const styleHeader = () => {
      headerRef.current && setActive(headerRef.current.clientHeight < window.scrollY);
    }

    window.addEventListener("scroll", styleHeader);

    return () => window.removeEventListener("scroll", styleHeader);
  }, [headerRef]);

  return (
    <header
      ref={headerRef}
      className="fixed z-50 w-full select-none"
    >
      <MainNavigation isActive={active} />
      <MobileNavigation isActive={active} />
    </header>
  );
}
