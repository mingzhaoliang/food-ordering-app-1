"use server";

import clientPromise from "../clientPromise";
import { ObjectId } from "mongodb";
import { DBMenuItem } from "@/types/menu";

export const addItem = async (userId: string, item: DBMenuItem): Promise<void> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const itemId = item._id;
	db.collection("cart").updateOne(
		{ user_id: new ObjectId(userId) },
		{
			$set: {
				[`items.${itemId}.menu_id`]: new ObjectId(itemId),
				[`items.${itemId}.public_id`]: item.public_id,
				[`items.${itemId}.course`]: item.course,
				[`items.${itemId}.name`]: item.name,
				[`items.${itemId}.price`]: item.price,
			},
			$inc: { [`items.${itemId}.quantity`]: 1 },
		},
		{ upsert: true }
	);
};

export const removeItem = async (userId: string, itemId: string, isDelete: boolean) => {
	const client = await clientPromise;
	const db = client.db("restaurant");
	const updateQuery = isDelete
		? { $unset: { [`items.${itemId}`]: "" } }
		: { $inc: { [`items.${itemId}.quantity`]: -1 } };

	db.collection("cart").updateOne({ user_id: new ObjectId(userId) }, updateQuery);

	return null;
};

export const clearCart = async (userId: string): Promise<void> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db
		.collection("cart")
		.updateOne({ user_id: new ObjectId(userId) }, { $set: { items: {} } });
};