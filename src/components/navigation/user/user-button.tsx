"use client";

import { useSession } from "next-auth/react";
import AuthenticatedUser from "./authenticated-user";
import LinkButtonRounded from "@/components/ui/link-button-rounded";

export default function UserButton({ onClick }: { onClick?: () => void }) {
    const { data: session, status } = useSession();

    if (status === "authenticated" && !session?.user) {
        throw new Error("The session is authenticated but the user is not found.");
    }

    return (
        <>
            {status === "loading" && (
                <LinkButtonRounded
                    href=""
                    src="/icons/person.svg"
                    alt="Person"
                    text="Loading..."
                    onClick={onClick}
                />
            )}
            {status === "authenticated" && session?.user && (
                <AuthenticatedUser userId={session.user.id} onClick={onClick!} />
            )}
            {status === "unauthenticated" && (
                <LinkButtonRounded
                    href="/api/auth/signin"
                    src="/icons/box-arrow-in-right.svg"
                    alt="Sign in"
                    text="Sign in"
                    onClick={onClick}
                />
            )}
        </>
    );
}
