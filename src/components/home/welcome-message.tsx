import Link from "next/link";

export default function WelcomeMessage() {
    return (
        <div className="h-full px-8 xl:px-10 flex flex-col justify-center items-center">
            <div className="relative z-10 border-2 p-1 border-slate-800">
                <div className="px-[0.4rem] py-4 transition-all duration-300 flex flex-col justify-between gap-2 xl:gap-4 border border-slate-800">
                    <h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-portLligatSans text-slate-800">
                        Benvenuti!
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl font-portLligatSans text-pretty text-center lg:leading-normal">Indulge in Melbourne's finest, artisanal Italian cuisine.</p>

                    <Link href="/" className="text-center mx-8 px-3 py-3 rounded md:text-lg lg:text-xl font-lato font-bold text-white bg-slate-700 hover:bg-slate-900 transition-all duration-300">Reserve a Table</Link>
                    <Link href="/" className="text-center mx-8 px-3 py-3 rounded md:text-lg lg:text-xl font-lato font-bold text-white bg-slate-700 hover:bg-slate-900 transition-all duration-300">Order Now</Link>
                </div>
            </div>
        </div>
    )
}