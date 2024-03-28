import { images, briefAbout } from "@/utils/data";
import Link from "next/link";
import DisplayImage from "../ui/display-image";
import Card from "../ui/card";

export default function BriefAbout() {

    return (
        <div id="brief-about" className="p-10 md:p-20 flex flex-col gap-8 sm:gap-12 md:gap-20 justify-center items-center transition-all duration-300">
            <div className="p-4 text-4xl sm:text-5xl md:text-6xl font-cursive text-pretty flex flex-wrap gap-4 justify-center items-center transition-all duration-300">
                <h1 className="text-nowrap">Welcome to Cucina Felice</h1>
                <h1 className="text-nowrap">- A Taste of Italy!</h1>
            </div>
            <div className="max-auto p-4 max-w-[75rem] grid grid-cols-1 lg:grid-cols-auto-fit justify-center items-center gap-6 transition-all">
                <div className="h-full flex flex-col justify-between gap-4">
                    <Card title={briefAbout.story.title} description={briefAbout.story.description} />
                    <Card title={briefAbout.services.title} description={briefAbout.services.description} />
                    <div className="p-1 border-4 border-slate-200">
                        <div className="p-4 lg:p-6 border-2 border-slate-100 flex flex-col gap-4">
                            <h2 className="pb-4 text-2xl lg:text-2xl xl:text-3xl font-portLligatSans text-center transition-all duration-300">Ready to Savour the Taste of Italy?</h2>
                            <Link href="/" className="text-center mx-8 px-2 py-3 rounded-md text-lg lg:text-xl xl:text-2xl font-lato font-bold text-slate-800 hover:text-white border border-slate-800 hover:bg-slate-800 transition-all duration-300">Reserve a Table</Link>
                            <Link href="/" className="text-center mx-8 px-2 py-3 rounded-md text-lg lg:text-xl xl:text-2xl font-lato font-bold text-slate-800 hover:text-white border border-slate-800 hover:bg-slate-800 transition-all duration-300">Order Now</Link>
                        </div>
                    </div>
                </div>
                <div className="relative row-start-1 col-span-1 flex justify-center h-full select-none">
                    <DisplayImage
                        src={images.restaurantEnvironment.src}
                        alt={images.restaurantEnvironment.alt}
                        imageRef={images.restaurantEnvironment.ref}
                        height={720}
                        width={1080}
                        imageClasses="max-md:max-h-[20rem] max-lg:max-h-[30rem] max-lg:w-full lg:h-full p-2 border-4 border-dashed border-slate-800 overflow-hidden object-cover object-center transition-all duration-300"
                        textClasses="left-3 bottom-3"
                    />
                </div>
            </div>
        </div>
    )
}