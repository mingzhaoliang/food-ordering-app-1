"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function CollapsedButton({
    src,
    alt,
    expand,
    imageSize,
    rotate = true,
    children,
}: {
    src: StaticImageData | string;
    alt: string;
    expand: boolean;
    imageSize: string;
    rotate?: boolean;
    children: React.ReactNode;
}) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseEnterHandler = () => {
        setIsHovered(true);
    };

    const mouseLeaveHandler = () => {
        setIsHovered(false);
    };

    let imageSizeClasses;

    switch (imageSize) {
        case "large":
            imageSizeClasses = "w-7 h-7 xs:w-9 xs:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12";
            break;
        case "small":
            imageSizeClasses = "w-6 h-6 xs:w-7 xs:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10";
            break;
        default:
            imageSizeClasses = "w-7 h-7 xs:w-9 xs:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12";
            break;
    }

    return (
        <div
            draggable={false}
            className={`p-1 xs:p-[0.4rem] flex items-center rounded-full transition-all duration-300 overflow-hidden shadow-md ${expand ? "bg-teal-600/50" : "bg-white hover:bg-teal-600/20"}`}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <div className={`relative ${imageSizeClasses}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100% 100%"
                    draggable={false}
                    className={`p-1 lg:p-2 transition-all duration-300 ${rotate && (isHovered || expand ? "md:rotate-0" : "md:-rotate-[45deg]")}`}
                />
            </div>
            <div
                className={`max-md:hidden font-portLligatSans md:text-lg lg:text-xl xl:text-[1.35rem] text-slate-800 transition-all duration-300 origin-left ${isHovered || expand ? "md:max-w-fit md:opacity-100 md:translate-x-0 md:pl-2 md:pr-3" : "md:max-w-0 md:opacity-0 md:-translate-x-5 md:p-0"}`}
            >
                {children}
            </div>
        </div>
    );
}
