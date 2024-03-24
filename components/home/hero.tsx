import { StaticImageData } from "next/image";
import ImageCarousel from "./image-carousel";
import WelcomeMessage from "./welcome-message";

export default function Hero({ images }: { images: { src: StaticImageData, alt: string, ref: JSX.Element }[] }) {
    return (
        <div className="relative h-screen overflow-hidden z-0 transition-all ease-linear flex flex-col justify-center items-center">
            <WelcomeMessage />
            <ImageCarousel images={images} />
        </div>
    )
}