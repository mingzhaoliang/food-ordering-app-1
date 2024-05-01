"use server";

import clientPromise from "../clientPromise";
import { ReservationDetails, ReservedTimes } from "./model-type";

export const createReservation = async (reservationDetails: ReservationDetails) => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	await db.collection("reservations").insertOne({
		...reservationDetails,
	});
};
