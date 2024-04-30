"use client";

import IconButton from "@/components/ui/button/icon-button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchUserData } from "@/lib/store/user-slice";
import { useEffect } from "react";

export default function AuthenticatedUser({
	userId,
	onClick,
}: {
	userId: string;
	onClick: () => void;
}) {
	const { user } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUserData(userId));
	}, [dispatch, userId]);

	return (
		<IconButton src="/icons/person.svg" alt="Person" onClick={onClick}>
			Hi! {user.username}
		</IconButton>
	);
}
