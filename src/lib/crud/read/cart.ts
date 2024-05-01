import clientPromise from "@/lib/clientPromise";
import { DBCart, DBCartItem } from "@/types/cart";
import { ObjectId } from "mongodb";

export const getCart = async (userId: string): Promise<DBCart> => {
	const client = await clientPromise;
	const db = client.db("restaurant");
	const cart = await db.collection("cart").findOne<DBCart>({ user_id: new ObjectId(userId) });

	return JSON.parse(JSON.stringify(cart));
};

export const getCartItems = async (userId: string): Promise<{ [key: string]: DBCartItem }> => {
	const client = await clientPromise;
	const db = client.db("restaurant");
	const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });
	const cartItems: { [key: string]: DBCartItem } = JSON.parse(JSON.stringify(cart?.items || {}));

	return cartItems;
};
