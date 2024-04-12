import Sidebar from "@/components/ui/sidebar";
import DisplayImage from "@/components/ui/display-image";
import { images } from "@/utils/data";
import CartModal from "@/components/menu/cart-modal";
import ErrorModal from "@/components/menu/error-modal";
import Order from "@/components/menu/order";

export default function MenuPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DisplayImage
                src={images.background0.src}
                alt={images.background0.alt}
                imageRef={images.background0.ref}
                className="w-screen h-screen fixed top-0 left-0 -z-10 opacity-85 overflow-hidden"
            />
            <div className="relative z-40 mt-16 xs:mt-20 md:mt-24 lg:mt-28 mb-16 mx-4 xs:mx-8 lg:mx-12 rounded-md space-y-2 md:space-y-4 transition-all">
                <div className="flex flex-col gap-4 md:gap-3 md:grid md:grid-rows-[auto_1fr] md:grid-cols-[minmax(calc(100vw_*_1/7),_auto)_repeat(6,_1fr)] lg:grid-cols-[minmax(calc(100vw_*_1/7),_auto)_repeat(6,_1fr)_minmax(calc(100vw_*_1/4),_2fr)] items-center md:items-start">
                    <div className="md:row-start-1 md:col-start-2 md:col-end-[-1] pt-2 pb-4 md:pb-8 flex flex-col gap-4 text-white">
                        <h1 className="font-portLligatSans font-bold text-4xl sm:text-5xl lg:text-6xl max-md:text-center">Our Menu</h1>
                        <p className="font-lato text-sm sm:text-base lg:text-lg max-md:text-center">Explore Authentic Italian Flavours</p>
                    </div>
                    <div className="sticky z-50 md:row-start-2 top-20 xs:top-24 md:top-28 mx-auto md:mx-0 max-md:mb-4 w-11/12 xs:w-10/12 sm:w-9/12 md:w-full">
                        <div className="max-md:p-2 rounded-full flex md:flex-col justify-between xs:justify-around md:justify-normal items-center md:items-start gap-2 md:gap-8 max-md:bg-white/70 max-md:backdrop-blur">
                            <Sidebar src="/icons/green_salad.png" href="/menu/antipasti" text="Antipasti" iconSize="large" rotate />
                            <Sidebar src="/icons/shallow_pan_of_food.png" href="/menu/primi" text="Primi" iconSize="large" rotate />
                            <Sidebar src="/icons/meat_on_bone.png" href="/menu/secondi" text="Secondi" iconSize="large" rotate />
                            <Sidebar src="/icons/cookie.png" href="/menu/dolci" text="Dolci" iconSize="large" rotate />
                        </div>
                    </div>
                    <div className="md:row-start-2 md:col-span-6 rounded-md">
                        {children}
                    </div>
                    <div className="max-lg:hidden sticky z-50 top-20 xs:top-24 md:top-28  ml-2 xl:ml-6 2xl:ml-8 md:row-start-2 md:col-span-2 transition-all">
                        <Order />
                    </div>
                </div>
            </div>
            <CartModal />
            <ErrorModal />
        </>
    )
}