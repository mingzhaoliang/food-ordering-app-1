"use server";

import clientPromise from "../clientPromise";
import { Order } from "./model-type";

export const createOrder = async (orderDetails: Order) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    await db.collection("orders").insertOne(orderDetails);
}