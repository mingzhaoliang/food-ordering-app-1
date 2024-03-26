"use client";

import { useEffect, useState } from "react";
import ImageCarouselItem from "./image-carousel-item";
import { StaticImageData } from "next/image";


const getTranslation1 = (index: number, currentIndex: number, imagesNumber: number) => {
    let x = (index - currentIndex) * 100;

    if (currentIndex === imagesNumber * 2 - 1) {
        x = (index + 1) * 100;
    }
    return x;
};


const getTranslation2 = (index: number, currentIndex: number, imagesNumber: number) => {
    return (
        (index +
            imagesNumber -
            (currentIndex <= 1 ? currentIndex + imagesNumber * 2 : currentIndex)) *
        100
    );
};

export default function ImageCarousel({ images }: { images: { src: StaticImageData, alt: string, ref: JSX.Element }[] }) {
    const concatImages = [...images, ...images];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const mouseOverHandler = () => {
        setIsHovered(true);
    };
    const mouseOutHandler = () => {
        setIsHovered(false);
    };


    const jumpToImage = (index: number) => {
        if (index === currentImageIndex % images.length) return;
        setCurrentImageIndex(index + Math.floor(currentImageIndex / images.length) * images.length);
    }

    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return (prevIndex + 1) % (concatImages.length * 2);
            });
        }, 1000 * 5);

        return () => clearInterval(intervel);
    }, [currentImageIndex]);

    return (
        <>
            {concatImages.map((image, index) => {
                return (
                    <ImageCarouselItem
                        key={`${image.alt}${index}`}
                        image={image}
                        displayCondition={
                            currentImageIndex > concatImages.length + 1 &&
                            currentImageIndex < concatImages.length * 2 - 1
                        }
                        translationX={getTranslation1(index, currentImageIndex, concatImages.length)}
                        mouseOverHandler={mouseOverHandler}
                        mouseOutHandler={mouseOutHandler}
                    />
                );
            })}
            {concatImages.map((image, index) => {
                return (
                    <ImageCarouselItem
                        key={`${image.alt}${index}`}
                        image={image}
                        displayCondition={
                            currentImageIndex > 1 && currentImageIndex < concatImages.length - 1
                        }
                        translationX={getTranslation2(index, currentImageIndex, concatImages.length)}
                        mouseOverHandler={mouseOverHandler}
                        mouseOutHandler={mouseOutHandler}
                    />
                );
            })}
            <p
                className="absolute left-0 bottom-0 px-4 bg-white/50 text-sm"
                style={{ display: isHovered ? "block" : "none", }}
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
            >
                {concatImages[currentImageIndex] ? concatImages[currentImageIndex].ref : ""}
            </p>

            <div className="absolute w-full bottom-[10%] flex justify-center transition-all">
                <div className="mx-auto flex gap-4 md:gap-6 lg:gap-8">
                    {images.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={"w-[0.35rem] h-[0.35rem] md:w-2 md:h-2 rounded-full bg-white cursor-pointer transition-all duration-300"}
                                style={
                                    currentImageIndex % images.length === index
                                        ? { backgroundColor: "#fca5a5", transform: "scale(1.5)" }
                                        : {}
                                }
                                onClick={() => jumpToImage(index)}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
