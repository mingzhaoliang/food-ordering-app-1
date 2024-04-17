"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { User } from "./model-type";

export const getUser = async (id: string) => {
    const client = await clientPromise;
    const db = client.db("authentication");

    const user = await db.collection("users").findOne({ _id: new ObjectId(id) });

    return JSON.parse(JSON.stringify(user));
}

export const updateUser = async (user: User) => {
    const client = await clientPromise;
    const db = client.db("authentication");

    await db.collection("users").updateOne(
        { _id: new ObjectId(String(user._id)) },
        {
            $set: {
                username: user.username,
                phoneNumber: user.phoneNumber,
                street: user.street,
                city: user.city,
                state: user.state,
                postcode: user.postcode
            }
        }
    )
}