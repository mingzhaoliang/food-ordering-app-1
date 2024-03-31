import Image, { StaticImageData } from "next/image";


export interface ImageCarouselItemProps {
    image: { src: StaticImageData, alt: string, ref: JSX.Element };
    displayCondition: boolean;
    translationX: number;
    mouseOverHandler: () => void;
    mouseOutHandler: () => void;
}

export default function ImageCarouselItem({ image, displayCondition, translationX, mouseOverHandler, mouseOutHandler }: ImageCarouselItemProps) {

    return (
        <>
            <Image
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="absolute w-full h-full object-cover object-center transition-transform duration-1000 opacity-90"
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