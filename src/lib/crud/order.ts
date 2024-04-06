"use server";

import { getServerSession } from "next-auth";
import clientPromise from "../clientPromise";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { ObjectId } from "mongodb";
import { CartItem } from "./model-type";


export const getCart = async (userId: string) => {

    const client = await clientPromise;
    const db = client.db("restaurant");
    const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });

    return JSON.parse(JSON.stringify(cart?.items)) || {};
}

export const addItemToCart = async (userId: string, item: CartItem) => {

    const client = await clientPromise;
    const db = client.db("restaurant");
    const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });

    if (cart && cart.items.hasOwnProperty(item.menu_id)) {
        db.collection("cart").updateOne(
            { user_id: new ObjectId(userId) },
            { $inc: { [`items.${item.menu_id}.quantity`]: 1 } }
        );
    } else {
        db.collection("cart").updateOne(
            { user_id: new ObjectId(userId) },
            {
                $set: {
                    [`items.${item.menu_id}`]: {
                        menu_id: new ObjectId(item.menu_id),
                        name: item.name,
                        quantity: 1,
                        price: item.price,
                        unit: item.unit
                    }
                }
            },
            { upsert: true }
        );
    }

    return;

}

export const removeItemFromCart = async (userId: string, itemId: string) => {
    const client = await clientPromise;
    const db = client.db("restaurant");
    const cart = await db.collection("cart").findOne({ user_id: new ObjectId(userId) });

    if (cart && cart.items.hasOwnProperty(itemId)) {
        if (cart.items[itemId].quantity > 1) {
            db.collection("cart").updateOne(
                { user_id: new ObjectId(userId) },
                { $inc: { [`items.${itemId}.quantity`]: -1 } }
            );
        } else {
            db.collection("cart").updateOne(
                { user_id: new ObjectId(userId) },
                { $unset: { [`items.${itemId}`]: "" } }
            );
        }
    }

    return;
}