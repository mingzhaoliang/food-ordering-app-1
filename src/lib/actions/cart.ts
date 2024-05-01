"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { getMenuItem } from "../crud/read/menu";
import { addItem, clearCart, removeItem } from "../crud/cart";
import { getCart } from "../crud/read/cart";
import { revalidatePath } from "next/cache";

export const cartAddItem = async (itemId: string) => {
	const session = await getServerSession(authOptions);

	try {
		if (!session) throw new Error("You need to be signed in to add items to your cart.");

		const item = await getMenuItem(itemId);
		if (!item) throw new Error("This dish is not in our menu.");

		await addItem(session.user.id, item);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export const cartRemoveItem = async (itemId: string) => {
	const session = await getServerSession(authOptions);

	try {
		if (!session) throw new Error("Unauthorised action.");

		const cart = await getCart(session.user.id);
		if (!cart || !cart.items.hasOwnProperty(itemId)) {
			revalidatePath("/menu", "layout");
			throw new Error("Your cart info is not up-to-date.");
		}

		await removeItem(session.user.id, itemId, cart.items[itemId].quantity === 1);
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export const cartClear = async () => {
	const session = await getServerSession(authOptions);

	try {
		if (!session) throw new Error("Unauthorised action.");

		await clearCart(session.user.id);
	} catch (error: any) {
		throw new Error(error.message);
	}
};
