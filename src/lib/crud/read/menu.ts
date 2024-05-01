import clientPromise from "@/lib/clientPromise";
import { DBMenuItem } from "@/types/menu";
import { ObjectId } from "mongodb";

export const getMenuItems = async (
	fieldValues: { [key: string]: string },
	limit?: number
): Promise<DBMenuItem[]> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const data = await db
		.collection("menu")
		.find<DBMenuItem>(fieldValues)
		.limit(limit || 0)
		.toArray();

	return JSON.parse(JSON.stringify(data));
};

export const getMenuItem = async (itemId: string): Promise<DBMenuItem | null> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const data = await db.collection("menu").findOne<DBMenuItem>({ _id: new ObjectId(itemId) });

	return JSON.parse(JSON.stringify(data));
};
