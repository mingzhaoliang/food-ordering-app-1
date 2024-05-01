"use client";

import { useSession } from "next-auth/react";
import AuthenticatedUser from "./authenticated-user";
import IconButton from "@/components/ui/button/icon-button";
import Link from "next/link";

export default function UserButton({ onClick }: { onClick?: () => void }) {
	const { data: session, status } = useSession();

	if (status === "authenticated" && !session?.user) {
		throw new Error("The session is authenticated but the user is not found.");
	}

	return (
		<>
			{status === "loading" && (
				<IconButton src="/icons/person.svg" alt="Person" onClick={onClick}>
					Loading...
				</IconButton>
			)}
			{status === "authenticated" && session?.user && (
				<AuthenticatedUser onClick={onClick!} />
			)}
			{status === "unauthenticated" && (
				<Link href="/api/auth/signin">
					<IconButton src="/icons/box-arrow-in-right.svg" alt="Sign in" onClick={onClick}>
						Sign in
					</IconButton>
				</Link>
			)}
		</>
	);
}
