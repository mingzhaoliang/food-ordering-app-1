import Image from "next/image";

interface ImageObject {
    image: string,
    alt: string
}

export default function ImageCarouselItem({ image, displayCondition, translationX }: { image: ImageObject, displayCondition: boolean, translationX: number }) {
    return (
        <Image
            src={image.image}
            alt={image.alt}
            className="absolute w-full h-full object-cover object-center z-0 transition-all duration-1000"
            style={{
                display:
                    displayCondition
                        ? "none"
                        : "block",
                transform: `translateX(${translationX}%)`,
            }}
            priority
        />
    )
}