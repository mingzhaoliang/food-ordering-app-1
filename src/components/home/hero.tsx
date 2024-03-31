import { StaticImageData } from "next/image";
import ImageCarousel from "./image-carousel";
import WelcomeMessage from "./welcome-message";

export default function Hero({ images }: { images: { src: StaticImageData, alt: string, ref: JSX.Element }[] }) {
    return (
        <div className="relative w-screen md:h-screen md:min-h-[40rem] overflow-x-hidden z-0 flex flex-col max-md:items-center max-md:gap-8 md:flex-row-reverse md:shadow">
            <div className="relative w-full z-0 max-md:h-[calc(100vh_*_9/15)] max-md:min-h-60 md:w-9/12 transition-none">
                <ImageCarousel images={images} />
            </div>
            <div className="relative w-full z-10 md:w-3/12 md:min-w-80 bg-white">
                <WelcomeMessage />
            </div>
            <div className="md:hidden w-5/12 flex justify-center items-center gap-4">
                <div className="flex-1 border-t border-slate-600"></div>
                <div className="shrink rounded-full border border-slate-600"></div>
                <div className="flex-1 border-t border-slate-600"></div>
            </div>
        </div>
    )
}