"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SignIn({ isActive, isMenuOpen, onClick }: { isActive: boolean, isMenuOpen?: boolean, onClick?: () => void }) {
    const { data: session, status } = useSession();

    let content;

    if (status === "loading") {
        content = <p>Signing in...</p>
    }

    // handle error

    if (status === "authenticated" && session?.user) {

        content = (
            // <Link href="/profile" className="whitespace-pre flex gap-1">
            <Link href="/account/profile" draggable={false} className="whitespace-pre flex gap-1 rounded-md md:bg-amber-400 px-4 py-2" onClick={onClick}>
                <svg className="transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isActive || isMenuOpen ? "#1e293b" : "#ffffff"} viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <p className="max-md:hidden">Hi!<span className="underline">{session.user.name || session.user.email || "Mr./Mrs."}</span></p>
            </Link>
        )
    } else {
        content = <Link href="/api/auth/signin" className="rounded-md bg-amber-400 px-4 py-2">Sign in</Link>
    }

    return (
        <>{content}</>
    )
}