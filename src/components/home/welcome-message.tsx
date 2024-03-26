"use client";

import Link from "next/link";
import Image from "next/image";
import chevronDown from "@/assets/icons/chevron-compact-down.svg";
import { useState } from "react";

export default function WelcomeMessage() {
    const [isHovered, setIsHovered] = useState(false);

    const mouseOverHandler = () => {
        setIsHovered(true);
    }

    const mouseOutHandler = () => {
        setIsHovered(false);
    }

    return (
        <Link
            href="#brief-about"
            className="relative z-10 mb-28 leading-relaxed border-2 border-dashed border-white text-pretty transition-all duration-300 flex flex-col items-center justify-between lg:gap-2 xl:gap-4"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
            style={{
                backgroundColor: isHovered ? "hsla(0, 0%, 100%, 0.4)" : "transparent",
            }}
        >
            <h1
                className="px-6 pt-8 md:px-8 md:pt-10 lg:px-10 lg:pt-12 text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-cursive text-white tracking-wider transition-all duration-300"
                style={{
                    color: isHovered ? "#0f172a" : "#ffffff",
                }}
            >Benvenuti !</h1>
            <Image src={chevronDown} alt="Chevron pointing down" width={32} height={32} className="pb-2 lg:pb-[0.75rem] xl:pb-4 animate-bounce-light" />
        </Link>
    )
}