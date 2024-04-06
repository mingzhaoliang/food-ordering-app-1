"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function CollapsedButton({ src, alt, text, expand, rotate = true }: { src: StaticImageData | string, alt: string, text: string, expand: boolean, rotate?: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseEnterHandler = () => {
        setIsHovered(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovered(false);
    }

    return (
        <div
            draggable={false}
            className={`p-1 xs:p-[0.4rem] flex items-center rounded-full transition-all duration-300 ${expand ? "bg-white shadow-md" : `${rotate ? "bg-white/60" : "bg-white"} hover:bg-white hover:shadow-md`}`}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <Image src={src} alt={alt} width={36} height={36} className={`p-1 w-7 h-7 xs:w-9 xs:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-all duration-300 ${rotate && (isHovered || expand ? "md:rotate-0" : "md:-rotate-[45deg]")}`} />
            <p className={`max-md:hidden font-portLligatSans font-bold md:text-lg lg:text-xl text-slate-800 transition-all duration-300 ${isHovered || expand ? "md:max-w-fit md:scale-100 md:opacity-100 md:translate-x-0 md:px-2" : "md:max-w-0 md:scale-0 md:opacity-0 md:-translate-x-5 md:p-0"}`}>{text}</p>
        </div>
    )
}