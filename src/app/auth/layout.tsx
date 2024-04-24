import Image from "next/image";
import { images } from "@/utils/data";
import DisplayImage from "@/components/ui/display-image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100 text-slate-900">
            <DisplayImage
                src={images.authBackground.src}
                alt={images.authBackground.alt}
                imageRef={images.authBackground.ref}
                priority
                className="fixed top-0 left-0 w-screen h-screen z-0 object-cover overflow-hidden"
            />
            <div className="z-10 shadow-xl max-[480px]:px-6 max-[480px]:pt-8 px-8 pt-10 pb-4 sm:min-w-80 xl:min-w-96 bg-white rounded-xl flex flex-col justify-center items-center gap-4 transition-all">
                <div className="rounded-full border-2 border-amber-300 p-[0.1rem] w-16 h-16 aspect-square flex justify-center items-center shadow animate-spin-slow">
                    <Image
                        src="/icons/pizza.png"
                        alt="Pizza"
                        width={60}
                        height={60}
                        className="rounded-full border border-amber-300 object-cover p-2"
                    />
                </div>
                {children}
            </div>
        </div>
    );
}
