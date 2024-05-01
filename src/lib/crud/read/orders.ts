import clientPromise from "@/lib/clientPromise";
import { DBOrder } from "@/types/orders";
import { ObjectId } from "mongodb";

export const getOrders = async (userId: string) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const data = await db
		.collection("orders")
		.find<DBOrder>({ user_id: new ObjectId(userId) })
		.sort({ created_at: -1 })
		.toArray();

	return JSON.parse(JSON.stringify(data));
};

export const getOrder = async (orderId: string): Promise<DBOrder> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const data = await db.collection("orders").findOne<DBOrder>({ _id: new ObjectId(orderId) });

	return JSON.parse(JSON.stringify(data));
};
