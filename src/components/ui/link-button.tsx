import Link from "next/link";

export default function LinkButton({ href, text }: { href: string, text: string }) {
    return (
        <Link href={href} className="w-10/12 xs:w-9/12 text-center mx-8 px-3 py-3 rounded md:text-lg lg:text-xl font-lato font-bold text-white bg-slate-700 hover:bg-slate-900 transition-all duration-300">{text}</Link>
    )
}