import Link from "next/link";

export default function LinkButtonRectangular({ className, href, text }: { className?: string, href: string, text: string }) {
    return (
        <Link href={href} className={`${className ? className : "w-full"} text-center px-3 py-3 rounded md:text-lg lg:text-xl font-lato font-bold text-white bg-slate-700 hover:bg-slate-900 transition-all duration-300`}>{text}</Link>
    )
}