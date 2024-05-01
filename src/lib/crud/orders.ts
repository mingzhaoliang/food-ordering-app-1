"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { DBOrder } from "@/types/orders";
import { revalidatePath } from "next/cache";

export const createOrder = async (orderDetails: DBOrder) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db.collection("orders").insertOne({
		...orderDetails,
		_id: new ObjectId(orderDetails._id),
		user_id: new ObjectId(orderDetails.user_id),
		items: orderDetails.items.map((item) => ({
			...item,
			menu_id: new ObjectId(item.menu_id),
		})),
	});
};

export const updateOrderStatus = async (orderId: string, newStatus: string) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db
		.collection("orders")
		.updateOne(
			{ _id: new ObjectId(orderId) },
			{ $set: { status: newStatus } },
			{ upsert: false }
		);
};

export const updateOrderDeliveryDetails = async (orderId: string, deliveryDetails: any) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db
		.collection("orders")
		.updateOne(
			{ _id: new ObjectId(orderId) },
			{ $set: { delivery_details: deliveryDetails } },
			{ upsert: false }
		);
};

export const updateOrderExpiration = async (orderId: string, newExpiration: Date) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db
		.collection("orders")
		.updateOne(
			{ _id: new ObjectId(orderId) },
			{ $set: { expires_at: newExpiration } },
			{ upsert: false }
		);

	revalidatePath("/my/orders", "page");
};
