import Link from "next/link";

export default function CancelledOrderActions() {
    return (
        <Link href="/menu/antipasti" className="text-sm xxs:text-base md:text-lg w-full text-center p-2 rounded font-lato text-white bg-slate-700 hover:bg-slate-900 transition-all duration-300">
            Go to menu
        </Link>
    )
}