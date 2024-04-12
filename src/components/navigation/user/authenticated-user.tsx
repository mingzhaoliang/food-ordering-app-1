"use client";

import LinkButtonRounded from "@/components/ui/link-button-rounded";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchUserData } from "@/lib/store/user-slice";
import { useEffect } from "react";

export default function AuthenticatedUser({ userId, onClick }: { userId: string, onClick: () => void }) {
    const { user } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function init() {
            dispatch(fetchUserData(userId));
        }

        init();
    }, []);

    return <LinkButtonRounded href="/my/profile" src="/icons/person.svg" alt="Person" text={`Hi! ${user.username}`} onClick={onClick} />;
}