"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import IconButton from "../ui/icon-button";
import person from "@/assets/icons/person.svg";
import arrowIn from "@/assets/icons/box-arrow-in-right.svg";
import { getProfile } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userActions } from "@/store/user-slice";

export default function SignIn({ isActive, isMenuOpen, onClick }: { isActive: boolean, isMenuOpen?: boolean, onClick?: () => void }) {
    const { data: session, status } = useSession();
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function getUser() {
            const user = await getProfile();
            dispatch(userActions.setUser(user));
        }

        if (status === "authenticated" && session?.user) {
            getUser();
        }
    }, [status])

    let content;

    if (status === "loading") {

        content = (
            <div className="whitespace-pre flex justify-center items-center gap-1 rounded-md px-1 py-2 transition-all" onClick={onClick}>
                <IconButton src={person} alt="Person">
                    <p className="max-[900px]:hidden text-slate-800 text-md px-1">Verifying...</p>
                </IconButton>
            </div>
        )

    } else if (status === "authenticated" && session?.user) {

        content = (
            <Link href="/account/profile" draggable={false} className="whitespace-pre flex justify-center items-center gap-1 rounded-md px-1 py-2 transition-all" onClick={onClick}>
                <IconButton src={person} alt="Person">
                    <p className="max-[900px]:hidden text-slate-800 text-md px-1 max-w-28 text-ellipsis overflow-hidden">Hi!<span className="underline">{user.username}</span></p>
                </IconButton>
            </Link>
        )

    } else {

        content = (
            <Link href="/api/auth/signin">
                <IconButton src={arrowIn} alt="Sign in"><p className="text-slate-800 text-md px-1">Sign in</p></IconButton>
            </Link>
        )

    }

    return (
        <>{content}</>
    )
}