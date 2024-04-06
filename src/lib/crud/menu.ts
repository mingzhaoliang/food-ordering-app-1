"use server";

import clientPromise from "../clientPromise";
import { MenuItem } from "./model-type";

export const getMenuByCourse = async (course: string): Promise<MenuItem[]> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("menu").find<MenuItem>({ "course": course }).toArray();

    return JSON.parse(JSON.stringify(data));
}
