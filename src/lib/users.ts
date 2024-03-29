import { ObjectId } from "mongodb";
import clientPromise from "./clientPromise";

export const updateUser = async (user:{ [k: string]: FormDataEntryValue | null; }) => {
    const client = await clientPromise;
    const db = client.db("my-database");

    await db.collection("users").updateOne(
        {_id: new ObjectId(String(user.id))}, 
        {$set: {
            phoneNumber: user.phoneNumber,
            addressLine1: user.addressLine1,
            addressLine2: user.addressLine2,
            city: user.city,
            state: user.state,
            postcode: user.postcode
        }}
    )
}