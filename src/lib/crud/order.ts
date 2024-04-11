"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { Order } from "./model-type";

export const createOrder = async (orderDetails: Order) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    await db.collection("orders").insertOne(orderDetails);
}

export const getOrderById = async (orderId: string) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("orders").findOne<Order>({ "_id": new ObjectId(orderId) });

    return JSON.parse(JSON.stringify(data));
}

export const updateOrderStatus = async (orderId: string, newStatus: string) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    await db.collection("orders").updateOne({ "_id": new ObjectId(orderId) }, { $set: { "status": newStatus } });
}