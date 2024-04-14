import Sidebar from "@/components/ui/sidebar";
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
            <div className="relative z-40 mt-16 xs:mt-20 md:mt-24 lg:mt-28 mb-16 space-y-2 md:space-y-4 transition-all">
                <div className="mx-auto flex flex-col gap-4 max-xxs:mx-2 max-xs:mx-4 md:gap-3 md:grid md:grid-rows-[auto_1fr] md:grid-cols-[repeat(12,_1fr)] items-center md:items-start">
                    <div className="md:row-start-1 md:col-start-4 md:col-end-[-2] pt-2 pb-4 md:pb-8 flex flex-col gap-4 text-white">
                        <h1 className="font-portLligatSans font-bold text-4xl sm:text-5xl lg:text-6xl max-md:text-center">Account</h1>
                    </div>
                    <div className="sticky z-50 md:row-start-2 md:col-start-2 md:col-span-2 top-20 xs:top-24 md:top-28 mx-auto md:mx-0 max-md:mb-4 w-11/12 xs:w-10/12 sm:w-9/12 md:w-full">
                        <div className="md:mr-6 max-md:p-2 max-md:rounded-full flex md:flex-col justify-around xs:justify-around md:justify-normal items-center md:items-start gap-2 md:gap-8 max-md:bg-white/60 max-md:backdrop-blur">
                            <Sidebar src="/icons/person.svg" alt="Profile" href="/my/profile" iconSize="small" rotate={false}>Profile</Sidebar>
                            <Sidebar src="/icons/text.svg" alt="Orders" href="/my/orders" iconSize="small" rotate={false}>
                                <p className="flex flex-nowrap whitespace-pre">
                                    Order<span className="xl:hidden">s</span><span className="max-xl:hidden"> History</span>
                                </p>
                            </Sidebar>
                            <Sidebar src="/icons/gear.svg" alt="Settings" href="/my/settings" iconSize="small" rotate={false}>Settings</Sidebar>
                        </div>
                    </div>
                    <div className="w-full md:row-start-2 md:col-start-4 md:col-end-[-2] rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}