"use client";

import AuthContent from "@/components/auth/auth-content";
import BackButton from "@/components/auth/back-button";
import { signOut } from "next-auth/react";

export default function SignInPage() {
    return (
        <AuthContent title="Sign out" message="Are you sure you want to sign out?">
            <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full p-4 border flex justify-center items-center gap-2 rounded hover:bg-rose-500/90 hover:text-white transition-all duration-300"
            >
                Sign out
            </button>
            <BackButton />
        </AuthContent>
    );
}
