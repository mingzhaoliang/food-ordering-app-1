"use server";

import { Reservation } from "@/types/reservations";
import clientPromise from "../clientPromise";

export const createReservation = async (reservation: Reservation) => {
	const client = await clientPromise;
	const db = client.db("restaurant");
	
	await db.collection("reservations").insertOne(reservation);
};
