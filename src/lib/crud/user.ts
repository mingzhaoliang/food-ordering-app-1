"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { DeliveryDetails } from "@/types/users";

export const updateUser = async (user: DeliveryDetails & { _id: string }): Promise<void> => {
	const client = await clientPromise;
	const db = client.db("authentication");

	await db.collection("users").updateOne(
		{ _id: new ObjectId(String(user._id)) },
		{
			$set: {
				username: user.username,
				mobileNumber: user.mobileNumber,
				street: user.street,
				city: user.city,
				state: user.state,
				postcode: user.postcode,
			},
		}
	);
};
