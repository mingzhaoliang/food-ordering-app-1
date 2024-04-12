"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { Order } from "./model-type";
import { orderExpirationTime, overdueTime } from "@/utils/data";

export const createOrder = async (orderDetails: Order) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    await db.collection("orders").insertOne({
        ...orderDetails,
        _id: new ObjectId(orderDetails._id),
        user_id: new ObjectId(orderDetails.user_id),
        items: orderDetails.items.map(item => ({
            ...item,
            menu_id: new ObjectId(item.menu_id),
        }))
    });
}

export const getOrders = async (userId: string) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("orders").find<Order>({ "user_id": new ObjectId(userId) }).sort({ "created_at": -1 }).toArray();

    return JSON.parse(JSON.stringify(data));

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