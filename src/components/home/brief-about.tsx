import { images, briefAbout } from "@/utils/data";
import DisplayImage from "../ui/display-image";
import Card from "../ui/card";
import LinkButtonRectangular from "../ui/link-button-rectangular";

export default function BriefAbout() {

    return (
        <div id="brief-about" className="px-2 py-10 xs:px-6 sm:p-10 md:p-20 flex flex-col gap-2 xs:gap-4 sm:gap-8 md:gap-12 lg:gap-16 justify-center items-center">
            <div className="p-2 xs:p-4 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cursive text-pretty flex flex-wrap gap-4 justify-center items-center transition-all duration-300">
                <h1 className="text-nowrap">Welcome to Cucina Felice</h1>
                <h1 className="text-nowrap">- A Taste of Italy!</h1>
            </div>
            <div className="mx-auto p-4 max-w-[75rem] grid grid-cols-1 lg:grid-cols-auto-fit justify-center items-center gap-6 transition-all">
                <div className="h-full flex flex-col justify-between gap-4">
                    <Card title={briefAbout.story.title} description={briefAbout.story.description} />
                    <Card title={briefAbout.services.title} description={briefAbout.services.description} />
                    <div className="p-1 border-4 border-slate-200">
                        <div className="p-4 lg:p-6 border-2 border-slate-100 flex flex-col items-center gap-4">
                            <h2 className="pb-4 text-2xl lg:text-2xl xl:text-3xl font-portLligatSans text-center transition-all duration-300">Ready to Savour the Taste of Italy?</h2>
                            <LinkButtonRectangular className="w-10/12 xs:w-9/12" href="/menu/antipasti" text="Explore Menu" />
                        </div>
                    </div>
                </div>
                <div className="relative row-start-1 col-span-1 flex justify-center h-full select-none p-2 border-4 border-dashed border-slate-800">
                    <DisplayImage
                        src={images.restaurantEnvironment.src}
                        alt={images.restaurantEnvironment.alt}
                        imageRef={images.restaurantEnvironment.ref}
                        height={720}
                        width={1080}
                        className="relative max-md:max-h-[20rem] max-lg:max-h-[30rem] max-lg:w-full lg:h-full overflow-hidden transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    )
}