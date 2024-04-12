import Sidebar from "@/components/my/sidebar";
import DisplayImage from "@/components/ui/display-image";
import { images } from "@/utils/data";

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DisplayImage
                src={images.background0.src}
                alt={images.background0.alt}
                imageRef={images.background0.ref}
                className="w-screen h-screen fixed top-0 left-0 -z-10 opacity-85 overflow-hidden"
            />
            <div className="relative z-40 mt-32 sm:mt-36 lg:mt-40 mb-16 mx-auto p-2 sm:p-4 rounded-md w-11/12 sm:w-10/12 md:w-9/12 max-w-[65rem] bg-white/40 backdrop-blur space-y-2 md:space-y-4 transition-all">
                <div className="bg-white rounded-md">
                    <Sidebar />
                </div>
                <div className="bg-white rounded-md">
                    {children}
                </div>
            </div>
        </>
    )
}