"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function DisplayImage({ src, alt, imageRef, width, height, imageClasses, textClasses }: { src: StaticImageData, alt: string, imageRef: JSX.Element, width: number, height: number, imageClasses: string, textClasses: string }) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseOverHandler = () => {
        setIsHovered(true);
        console.log(imageRef)
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