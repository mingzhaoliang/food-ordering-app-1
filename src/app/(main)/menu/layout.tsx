import Sidebar from "@/components/ui/sidebar";
import CartModal from "@/components/menu/cart-modal";
import Cart from "@/components/menu/cart";

export default function MenuPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative min-h-screen z-40 pt-16 xs:pt-20 md:pt-24 lg:pt-28 pb-16 px-4 xs:px-8 lg:px-12 space-y-2 md:space-y-4 transition-all bg-teal-600/10">
                <div className="max-w-[120rem] mx-auto flex flex-col gap-4 md:gap-3 md:grid md:grid-rows-[auto_1fr] md:grid-cols-[minmax(calc(100vw_*_1/7),_auto)_repeat(6,_1fr)] lg:grid-cols-[minmax(calc(min(100vw,_120rem)_*_1/7),_auto)_repeat(6,_1fr)_minmax(calc(min(100vw,_120rem)_*_1/4),_2fr)] items-center md:items-start">
                    <div className="md:row-start-1 md:col-start-2 md:col-end-[-1] pt-2 pb-4 md:pb-8 flex flex-col gap-4 text-slate-800">
                        <h1 className="font-portLligatSans text-4xl sm:text-5xl lg:text-6xl max-md:text-center">Our Menu</h1>
                        <p className="font-lato text-sm sm:text-base lg:text-lg max-md:text-center">Explore Authentic Italian Flavours</p>
                    </div>
                    <div className="sticky z-50 md:row-start-2 top-20 xs:top-24 md:top-28 mx-auto md:mx-0 max-md:mb-4 w-11/12 xs:w-10/12 sm:w-9/12 md:w-full">
                        <div className="max-md:p-2 rounded-full flex md:flex-col justify-between xs:justify-around md:justify-normal items-center md:items-start gap-2 md:gap-8 max-md:bg-white/60 max-md:backdrop-blur">
                            <Sidebar src="/icons/green_salad.png" alt="Antipasti" href="/menu/antipasti" iconSize="large" rotate>Antipasti</Sidebar>
                            <Sidebar src="/icons/shallow_pan_of_food.png" alt="Primi" href="/menu/primi" iconSize="large" rotate>Primi</Sidebar>
                            <Sidebar src="/icons/meat_on_bone.png" alt="Secondi" href="/menu/secondi" iconSize="large" rotate>Secondi</Sidebar>
                            <Sidebar src="/icons/cookie.png" alt="Dolci" href="/menu/dolci" iconSize="large" rotate>Dolci</Sidebar>
                        </div>
                    </div>
                    <div className="md:row-start-2 md:col-span-6 rounded-md">
                        {children}
                    </div>
                    <div className="max-lg:hidden sticky z-50 top-20 xs:top-24 md:top-28  ml-2 xl:ml-6 2xl:ml-8 md:row-start-2 md:col-span-2 transition-all">
                        <Cart />
                    </div>
                </div>
            </div>
            <CartModal />
        </>
    )
}