import CollapsedButton from "@/components/ui/collapsed-button";
import CoursePreview from "./course-preview";
import NavigationBar from "./navigation-bar";

export default function MenuOverview() {
    return (
        <div id="brief-about" className="px-2 mt-10 xs:px-6 sm:px-10 sm:mt-10 md:px-20 md:mt-20 flex flex-col gap-2 xs:gap-4 sm:gap-8 md:gap-12 lg:gap-16 justify-center items-center">
            <div className="flex flex-col items-center gap-6">
                <h1 className="p-2 xs:p-4 text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-cursive text-pretty flex flex-wrap gap-4 justify-center items-center transition-all duration-300">
                    <span className="text-nowrap">Welcome to Cucina Felice</span>
                    <span className="text-nowrap">- A Taste of Italy!</span>
                </h1>
                <p className="p-2 xs:p-4 font-lato max-w-[40rem] text-center">Dive into an authentic culinary journey with our diverse selection of traditional Italian courses, from enticing antipasti to indulgent dolci.</p>
            </div>
            <NavigationBar />
            <CoursePreview />
        </div>
    )
}