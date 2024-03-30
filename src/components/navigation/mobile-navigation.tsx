"use client";

import Link from "next/link";
import { useState } from "react";
import NavigationList from "./navigation-list";
import SignIn from "./sign-in";
import hamburger from "@/assets/icons/hamburger.svg";
import x from "@/assets/icons/x.svg";
import cart from "@/assets/icons/cart2.svg";
import Image from "next/image";
import IconButton from "../ui/icon-button";

export default function MobileNavigation({ isActive }: { isActive: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div
      className="md:hidden flex flex-col w-full mx-auto transition-all"
      style={{
        backgroundColor: isActive || isMenuOpen ? "hsla(0, 0%, 100%, 0.6)" : "transparent",
        backdropFilter: isActive || isMenuOpen ? "blur(4px)" : "none",
        boxShadow: isActive || isMenuOpen ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="px-4 py-4 md:px-6 lg:px-8 xl:px-10 w-full flex justify-between items-center text-white">
        <Link
          href="/"
          draggable={false}
          className="text-[1.35rem] xs:text-3xl font-black tracking-wider font-cursive"
          style={{
            color: isMenuOpen || isActive ? "#1e293b" : "#ffffff",
            transition: "all 0.25s ease-in-out",
          }}
        >
          Cucina Felice
        </Link>

        <div className="flex justify-center items-center gap-4 max-sm:text-md">
          <SignIn isActive={isActive} isMenuOpen={isMenuOpen} onClick={closeMenu} />
          <IconButton
            src={isMenuOpen ? x : hamburger}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            className={`transition-transform ${isMenuOpen ? "-rotate-90" : "rotate-0"}`}
            // imageSize={isMenuOpen ? 7 : 5}
            onClick={toggleMenu}
          />
        </div>

      </div>
      <div
        className="max-sm:text-md font-lato px-6 py-6 lg:px-8 xl:px-10 flex flex-col gap-[1.5rem] justify-around items-center text-[1.06rem] text-slate-800 lg:text-lg lg:gap-6 xl:gap-8 transition-all"
        style={{
          maxHeight: isMenuOpen ? "100vh" : "0",
          justifyContent: isMenuOpen ? "center" : "flex-end",
          padding: isMenuOpen ? "1.5rem" : "0",
          opacity: isMenuOpen ? 1 : 0,
          transform: `translateY(${isMenuOpen ? "0" : "-10%"})`,
        }}
      >
        <NavigationList closeMenu={closeMenu} />
      </div>
    </div>
  );
}
