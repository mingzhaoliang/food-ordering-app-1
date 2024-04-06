"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import IconButton from "../ui/icon-button";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchUserData } from "@/lib/store/user-slice";
import { fetchCartData } from "@/lib/store/cart-slice";

export default function SignInButton({ onClick }: { onClick?: () => void }) {
    const { data: session, status } = useSession();
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function init() {
            dispatch(fetchUserData(session!.user.id));
            dispatch(fetchCartData(session!.user.id));
        }

        if (status === "authenticated" && session?.user) {
            init();
        }
    }, [status])

    let content;

    if (status === "loading") {

        content = (
            <div className="whitespace-pre flex justify-center items-center gap-1 rounded-md min-[900px]:px-1 min-[900px]:py-2 transition-all" onClick={onClick}>
                <IconButton src="/icons/person.svg" alt="Person">
                    <p className="max-[900px]:hidden text-slate-800 text-md px-1">Verifying...</p>
                </IconButton>
            </div>
        )

    } else if (status === "authenticated" && session?.user) {

        content = (
            <Link href="/account/profile" draggable={false} className="whitespace-pre flex justify-center items-center gap-1 rounded-md min-[900px]:px-1 min-[900px]:py-2 transition-all" onClick={onClick}>
                <IconButton src="/icons/person.svg" alt="Person">
                    <p className="max-[900px]:hidden text-slate-800 text-md px-1 max-w-28 text-ellipsis overflow-hidden">Hi!<span className="underline">{user.username}</span></p>
                </IconButton>
            </Link>
        )

    } else {

        content = (
            <Link href="/api/auth/signin">
                <IconButton src="/icons/box-arrow-in-right.svg" alt="Sign in"><p className="text-slate-800 text-md px-1">Sign in</p></IconButton>
            </Link>
        )

    }

    return (
        <>{content}</>
    )
}