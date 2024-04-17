import Image, { StaticImageData } from "next/image";


export interface ImageCarouselItemProps {
    image: { src: StaticImageData | string, alt: string, reference: React.ReactNode };
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
                fill
                className="absolute w-full h-full object-cover object-center transition-transform duration-1000"
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