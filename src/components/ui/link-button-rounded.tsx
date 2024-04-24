import Link from "next/link";
import IconButton from "./icon-button";

export default function LinkButtonRounded({
    href,
    text,
    src,
    alt,
    onClick,
}: {
    href: string;
    text: string;
    src: string;
    alt: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            draggable={false}
            className="whitespace-pre flex justify-center items-center gap-1 rounded-md md:px-1 md:py-2 transition-all"
            onClick={onClick}
        >
            <IconButton src={src} alt={alt}>
                <p className="max-md:hidden text-slate-800 text-md px-1 max-w-28 text-ellipsis overflow-hidden">
                    {text}
                </p>
            </IconButton>
        </Link>
    );
}
