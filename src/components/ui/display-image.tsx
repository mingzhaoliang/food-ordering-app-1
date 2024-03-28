"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function DisplayImage({ src, alt, imageRef, width, height, imageClasses, textClasses, priority }: { src: StaticImageData, alt: string, imageRef: JSX.Element, width?: number, height?: number, imageClasses: string, textClasses: string, priority?: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseOverHandler = () => {
        setIsHovered(true);
    }

    const mouseOutHandler = () => {
        setIsHovered(false);
    }

    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                draggable={false}
                className={imageClasses}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
                priority={priority || false}
            />
            <p
                className={`absolute px-4 bg-white/50 text-sm ${textClasses}`}
                style={{ display: isHovered ? "block" : "none", }}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
            >
                {imageRef}
            </p>
        </>
    )
}