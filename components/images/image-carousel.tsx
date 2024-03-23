"use client";

import { useEffect, useState } from "react";
import ImageCarouselItem from "./image-carousel-item";


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

export default function ImageCarousel({ images }: { images: any[] }) {
    const concatImages = [...images, ...images];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return (prevIndex + 1) % (concatImages.length * 2);
            });
        }, 1000 * 5);

        return () => clearInterval(intervel);
    }, []);

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
                    />
                );
            })}
        </>
    );
}
