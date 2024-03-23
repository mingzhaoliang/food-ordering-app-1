"use client";

import hamburger from "@/assets/hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="md:hidden px-6 py-6 flex flex-col gap-4 w-full mx-auto transition-all" style={{ backgroundColor: isMenuOpen ? "hsla(0, 0%, 100%, 0.6)" : "transparent" }}>
      <div className="w-full flex justify-between items-center text-white">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-black tracking-wider font-Pattaya"
          style={{
            color: isMenuOpen ? "#1e293b" : "#ffffff",
            transition: "all 0.25s ease-in-out",
          }}
        >
          Cucina Felice
        </Link>
        <div className="relative flex justify-center items-center" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            fill={isMenuOpen ? "#1e293b" : "#ffffff"}
            viewBox="0 0 16 16"
            className="absolute right-0 cursor-pointer transition-transform"
            style={{
              opacity: isMenuOpen ? 0 : 1,
              transform: `rotate(${isMenuOpen ? "-90deg" : "0deg"})`,
              pointerEvents: isMenuOpen ? "none" : "auto",
            }}
          >
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill={isMenuOpen ? "#1e293b" : "#ffffff"}
            viewBox="0 0 16 16"
            className="absolute right-[0.125rem] cursor-pointer transition-transform"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: `rotate(${isMenuOpen ? "0deg" : "-90deg"})`,
              pointerEvents: isMenuOpen ? "auto" : "none",
            }}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
      </div>
      <div
        className="flex flex-col gap-[1.5rem] justify-around items-center text-[1.06rem] text-slate-800 lg:text-lg lg:gap-6 xl:gap-8 transition-all"
        style={{
          opacity: isMenuOpen ? 1 : 0,
          transform: `translateY(${isMenuOpen ? "0" : "-10%"})`,
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button className="">Log in</button>
      </div>
    </div>
  );
}
