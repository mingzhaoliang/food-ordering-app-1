"use server";

import clientPromise from "../clientPromise";
import { ObjectId } from "mongodb";
import { MenuItem } from "./model-type";

export const getCartItems = async (userId: string) => {
	const client = await clientPromise;
	const db = client.db("restaurant");
	const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });

	return JSON.parse(JSON.stringify(cart?.items || {}));
};

export const addItemToCart = async (userId: string, existingMenuItem: MenuItem) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const itemId = existingMenuItem._id;
	const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });

	if (cart && cart.items.hasOwnProperty(itemId)) {
		db.collection("cart").updateOne(
			{ user_id: new ObjectId(userId) },
			{ $inc: { [`items.${itemId}.quantity`]: 1 } }
		);
	} else {
		db.collection("cart").updateOne(
			{ user_id: new ObjectId(userId) },
			{
				$set: {
					[`items.${itemId}`]: {
						menu_id: new ObjectId(itemId),
						public_id: existingMenuItem.public_id,
						course: existingMenuItem.course,
						name: existingMenuItem.name,
						quantity: 1,
						price: existingMenuItem.price,
					},
				},
			},
			{ upsert: true }
		);
	}

	return null;
};

export const removeItemFromCart = async (userId: string, itemId: string) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });

	if (cart && cart.items.hasOwnProperty(itemId)) {
		if (cart.items[itemId].quantity > 1) {
			db.collection("cart").updateOne(
				{ user_id: new ObjectId(userId) },
				{ $inc: { [`items.${itemId}.quantity`]: -1 } }
			);
		} else {
			db.collection("cart").updateOne(
				{ user_id: new ObjectId(userId) },
				{ $unset: { [`items.${itemId}`]: "" } }
			);
		}
	}

	return null;
};

export const clearCart = async (userId: string) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db
		.collection("cart")
		.updateOne({ user_id: new ObjectId(userId) }, { $set: { items: {} } });

	return null;
};
