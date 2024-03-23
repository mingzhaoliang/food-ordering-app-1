import Image from "next/image";

interface ImageObject {
    image: string,
    alt: string,
    ref: string,
}

export interface ImageCarouselItemProps {
    image: ImageObject;
    displayCondition: boolean;
    translationX: number;
    mouseOverHandler: () => void;
    mouseOutHandler: () => void;
}

export default function ImageCarouselItem({ image, displayCondition, translationX, mouseOverHandler, mouseOutHandler }: ImageCarouselItemProps) {

    return (
        <>
            <Image
                src={image.image}
                alt={image.alt}
                className="absolute w-full h-full object-cover object-center transition-all duration-1000 opacity-90"
                style={{
                    display:
                        displayCondition
                            ? "none"
                            : "block",
                    transform: `translateX(${translationX}%)`,
                }}
                priority
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}
            />
        </>
    )
}