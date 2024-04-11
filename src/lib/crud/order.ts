"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { Order } from "./model-type";
import { orderExpirationTime, overdueTime } from "@/utils/data";

export const createOrder = async (orderDetails: Order) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const collections = (await db.listCollections().toArray()).filter(collection => collection.name === "orders");

    if (collections.length === 0) {
        await db.collection("orders").createIndex(
            { "created_at": 1 },
            {
                name: "Partial-TTL-Index",
                partialFilterExpression: { "status": "placed" },
                expireAfterSeconds: orderExpirationTime + overdueTime,
            }
        );
    }

    await db.collection("orders").insertOne({
        ...orderDetails,
        _id: new ObjectId(orderDetails._id),
        user_id: new ObjectId(orderDetails.user_id),
    });
}
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