import Sidebar from "@/components/account/sidebar";
import DisplayImage from "@/components/ui/display-image";
import { images } from "@/utils/data";

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen min-h-screen flex justify-center items-start">
            <DisplayImage
                src={images.hero0.src}
                alt={images.hero0.alt}
                imageRef={images.hero0.ref}
                imageClasses="fixed top-0 left-0 w-full min-h-screen -z-10 object-cover object-center shadow-md transition-all"
                textClasses="bottom-0 left-0"
            />
            <div className="relative z-40 mt-24 sm:mt-28 lg:mt-36 mb-16 p-2 sm:p-4 rounded-md w-11/12 sm:w-10/12 md:w-9/12 max-w-[65rem] bg-white/40 backdrop-blur space-y-2 md:space-y-4 gap-4 lg:gap-6 transition-all">
                <div className="bg-white rounded-md">
                    <Sidebar />
                </div>
                <div className="bg-white rounded-md">
                    {children}
                </div>
            </div>
        </div>
    )
}