import { StaticImageData } from "next/image";
import ImageCarousel from "./image-carousel";
import WelcomeMessage from "./welcome-message";

export default function Hero({ images }: { images: { src: StaticImageData, alt: string, ref: JSX.Element }[] }) {
    return (
        <div className="relative w-screen lg:h-screen lg:min-h-[40rem] overflow-x-hidden z-0 flex flex-col max-lg:items-center max-lg:gap-8 lg:flex-row-reverse lg:shadow">
            <div className="relative w-full z-0 max-lg:h-[calc(100vh_*_9/15)] max-lg:min-h-60 lg:w-9/12 transition-none">
                <ImageCarousel images={images} />
            </div>
            <div className="relative w-full z-10 lg:w-3/12 lg:min-w-[22rem] bg-white">
                <WelcomeMessage />
            </div>
            <div className="lg:hidden w-5/12 flex justify-center items-center gap-4">
                <div className="flex-1 border-t border-slate-600"></div>
                <div className="shrink rounded-full border border-slate-600"></div>
                <div className="flex-1 border-t border-slate-600"></div>
            </div>
        </div>
    )
}