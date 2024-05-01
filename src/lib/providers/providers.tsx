"use client";

import { SessionProvider } from "next-auth/react";
import StoreProvider from "./store-provider";
import { DBCartItem } from "@/types/cart";
import { DBUser } from "@/types/users";

export default function Providers({
	children,
	user,
	cartItems,
}: {
	children: React.ReactNode;
	user: DBUser;
	cartItems: { [key: string]: DBCartItem };
}) {
	return (
		<StoreProvider user={user} cartItems={cartItems}>
			<SessionProvider>{children}</SessionProvider>
		</StoreProvider>
	);
}
