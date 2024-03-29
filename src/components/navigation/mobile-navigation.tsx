"use client";

import Link from "next/link";
import { useState } from "react";
import NavigationList from "./navigation-list";
import SignIn from "./sign-in";

export default function MobileNavigation({ isActive }: { isActive: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
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
      <div
        className="px-6 py-4 lg:px-8 xl:px-10 w-full flex justify-between items-center text-white"
      >
        <Link
          href="/"
          draggable={false}
          className="text-2xl sm:text-3xl font-black tracking-wider font-cursive"
          style={{
            color: isMenuOpen || isActive ? "#1e293b" : "#ffffff",
            transition: "all 0.25s ease-in-out",
          }}
        >
          Cucina Felice
        </Link>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              fill={isMenuOpen || isActive ? "#1e293b" : "#ffffff"}
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
              fill={isMenuOpen || isActive ? "#1e293b" : "#ffffff"}
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
          <SignIn isActive={isActive} isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
      <div
        className="font-lato px-6 py-6 lg:px-8 xl:px-10 flex flex-col gap-[1.5rem] justify-around items-center text-[1.06rem] text-slate-800 lg:text-lg lg:gap-6 xl:gap-8 transition-all"
        style={{
          maxHeight: isMenuOpen ? "100vh" : "0",
          padding: isMenuOpen ? "1.5rem" : "0",
          opacity: isMenuOpen ? 1 : 0,
          transform: `translateY(${isMenuOpen ? "0" : "-10%"})`,
        }}
      >
        <NavigationList isActive={isActive} isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}
