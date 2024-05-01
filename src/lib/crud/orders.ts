"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { Order } from "./model-type";

export const createOrder = async (orderDetails: Order) => {
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

// TODO: add user id to the query to prevent unauthorized access

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
};
