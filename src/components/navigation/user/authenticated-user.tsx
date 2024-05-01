"use client";

import IconButton from "@/components/ui/button/icon-button";
import { useAppSelector } from "@/lib/store/hooks";
import Link from "next/link";

export default function AuthenticatedUser({ onClick }: { onClick: () => void }) {
	const { user } = useAppSelector((state) => state.global);

	return (
		<Link href="/my/orders">
			<IconButton src="/icons/person.svg" alt="Person" onClick={onClick}>
				Hi! {user.username}
			</IconButton>
		</Link>
	);
}
