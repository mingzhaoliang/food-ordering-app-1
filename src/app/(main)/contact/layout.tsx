export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen z-40 pt-20 xs:pt-24 md:pt-28 lg:pt-32 pb-16 px-4 xs:px-8 lg:px-12 space-y-2 md:space-y-4 transition-all bg-teal-600/10">
            <div className="mx-auto max-w-[80rem] gap-4 max-xxs:mx-2 max-xs:mx-4">
                <div className="md:row-start-1 md:col-start-1 md:col-end-[-1] pt-2 pb-4 md:pb-8 flex flex-col gap-4 text-slate-800">
                    <h1 className="font-portLligatSans text-4xl sm:text-5xl lg:text-6xl max-md:text-center">
                        Contact Us
                    </h1>
                </div>
                <div className="w-full md:row-start-2 md:col-start-1 md:col-end-[-1] rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
