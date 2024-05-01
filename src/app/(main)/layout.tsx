import type { Metadata } from "next";
import Header from "@/components/navigation/header";
import Providers from "@/lib/providers/providers";
import Toast from "@/components/ui/toast";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { DBCartItem } from "@/types/cart";
import { getCartItems } from "@/lib/crud/read/cart";
import { getUser } from "@/lib/crud/read/user";

export const metadata: Metadata = {
	title: "Cucina Felice",
	description: "Authentic Italian Food",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getServerSession(authOptions);
	const user = session
		? await getUser(session.user.id)
		: {
				_id: "",
				name: "",
				email: "",
				image: "",
				username: "",
				mobileNumber: "",
				street: "",
				city: "",
				state: "",
				postcode: "",
			};
	const cartItems: { [key: string]: DBCartItem } = session
		? await getCartItems(session.user.id)
		: {};

	return (
		<Providers user={user} cartItems={cartItems}>
			<Header />
			{children}
			<Toast />
		</Providers>
	);
}
