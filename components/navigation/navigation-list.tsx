"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function NavigationList({ isActive, isMenuOpen }: { isActive: boolean, isMenuOpen?: boolean }) {
    const { user, error, isLoading } = useUser();

    let content;

    if (isLoading) {
        content = <p>Logging in...</p>
    }

    // handle error

    if (user) {
        content = (
            <Link href="/profile" className="whitespace-pre flex gap-1">
                <svg className="transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isActive || isMenuOpen ? "#1e293b" : "#ffffff"} viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                Hi!<span className="underline">{user.name || user.email || "Mr./Mrs."}</span>
            </Link>
        )
    } else {
        content = <Link href="/api/auth/login">Log in</Link>
    }

    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/order">Order Now</Link>
            {content}
        </>
    )
}