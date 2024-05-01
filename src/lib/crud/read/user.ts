import clientPromise from "@/lib/clientPromise";
import { DBUser } from "@/types/users";
import { ObjectId } from "mongodb";

export const getUser = async (id: string): Promise<DBUser> => {
	const client = await clientPromise;
	const db = client.db("authentication");

	const user = await db.collection("users").findOne<DBUser>({ _id: new ObjectId(id) });

	return JSON.parse(JSON.stringify(user));
};
