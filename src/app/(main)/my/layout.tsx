import Sidebar from "@/components/ui/sidebar";
import HeaderTitle from "@/components/my/header-title";

export default function AccountPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen z-40 pt-16 xs:pt-20 md:pt-24 lg:pt-28 pb-16 px-4 xs:px-8 lg:px-12 space-y-2 md:space-y-4 transition-all bg-teal-600/10">
            <div className="mx-auto flex flex-col gap-4 max-xxs:mx-2 max-xs:mx-4 md:gap-3 md:grid md:grid-rows-[auto_1fr] md:grid-cols-[minmax(max(calc(100vw_*_1/7),_12rem),_auto)_repeat(6,_1fr)] items-center md:items-start">
                <div className="md:row-start-1 md:col-start-2 md:col-end-[-2] pt-2 pb-4 md:pb-8 flex flex-col gap-4 text-slate-800">
                    <HeaderTitle />
                </div>
                <div className="sticky z-50 md:row-start-2 top-20 xs:top-24 md:top-28 mx-auto md:mx-0 max-md:mb-4 w-11/12 xs:w-10/12 sm:w-9/12 md:w-full">
                    <div className="md:mr-6 max-md:p-2 max-md:rounded-full flex md:flex-col justify-between xs:justify-around md:justify-normal items-center md:items-start gap-2 md:gap-8 max-md:bg-white/60 max-md:backdrop-blur">
                        <Sidebar src="/icons/text.svg" alt="Orders" href="/my/orders" iconSize="small" rotate={false}>
                            <p className="flex flex-nowrap whitespace-pre">
                                Order<span className="xl:hidden">s</span><span className="max-xl:hidden"> History</span>
                            </p>
                        </Sidebar>
                        <Sidebar src="/icons/calendar-check.svg" alt="Reservations" href="/my/reservations" iconSize="small" rotate={false}>Reservations</Sidebar>
                        <Sidebar src="/icons/person.svg" alt="Profile" href="/my/profile" iconSize="small" rotate={false}>Profile</Sidebar>
                        <Sidebar src="/icons/gear.svg" alt="Settings" href="/my/settings" iconSize="small" rotate={false}>Settings</Sidebar>
                    </div>
                </div>
                <div className="w-full md:row-start-2 md:col-span-6 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}