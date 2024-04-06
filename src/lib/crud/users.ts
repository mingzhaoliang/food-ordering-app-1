"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";

export const getUser = async (id: string) => {
    const client = await clientPromise;
    const db = client.db("my-database");

    const user = await db.collection("users").findOne({ _id: new ObjectId(id) });

    return JSON.parse(JSON.stringify(user));
}

export const updateUser = async (user: { [k: string]: FormDataEntryValue | null; }) => {
    const client = await clientPromise;
    const db = client.db("my-database");

    await db.collection("users").updateOne(
        { _id: new ObjectId(String(user.id)) },
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