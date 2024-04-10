"use server";

import { ObjectId } from "mongodb";
import clientPromise from "../clientPromise";
import { MenuItem } from "./model-type";

export const getMenuByCourse = async (course: string): Promise<MenuItem[]> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("menu").find<MenuItem>({ "course": course }).toArray();

    return JSON.parse(JSON.stringify(data));
}

export const getMenuItemById = async (itemId: string): Promise<MenuItem | null> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("menu").findOne<MenuItem>({ "_id": new ObjectId(itemId) });

    return JSON.parse(JSON.stringify(data));
}