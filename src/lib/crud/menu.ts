"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { MenuItem } from "./model-type";

export const getMenuItemsByField = async (
    fieldValues: { [key: string]: string },
    limit?: number
): Promise<MenuItem[]> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    let data;
    if (limit) {
        data = await db
            .collection("menu")
            .find<MenuItem>({ ...fieldValues })
            .limit(limit)
            .toArray();
    } else {
        data = await db
            .collection("menu")
            .find<MenuItem>({ ...fieldValues })
            .toArray();
    }

    return JSON.parse(JSON.stringify(data));
};

export const getMenuItemById = async (itemId: string): Promise<MenuItem | null> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("menu").findOne<MenuItem>({ _id: new ObjectId(itemId) });

    return JSON.parse(JSON.stringify(data));
};

export const getMenuItemByPublicId = async (publicId: string): Promise<MenuItem | null> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("menu").findOne<MenuItem>({ public_id: publicId });

    return JSON.parse(JSON.stringify(data));
};
