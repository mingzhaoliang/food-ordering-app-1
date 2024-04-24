"use server";

import clientPromise from "../clientPromise";
import { ReservationDetails, ReservedTimes } from "./model-type";

export const createReservation = async (reservationDetails: ReservationDetails) => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    await db.collection("reservations").insertOne({
        ...reservationDetails,
    });
}

export const getReservations = async (userId: string): Promise<(ReservationDetails & { _id: string })[]> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const data = await db.collection("reservations").find<ReservationDetails>({ "userId": userId }).sort({ "selectedDate": -1 }).toArray();

    return JSON.parse(JSON.stringify(data));
}

export const getReservedTimes = async (selectedDate: Date): Promise<ReservedTimes> => {
    const client = await clientPromise;
    const db = client.db("restaurant");

    const reservations = await db.collection("reservations").aggregate([
        {
            $match: { selectedDate }
        },
        {
            $group: {
                _id: {
                    selectedTime: "$selectedTime",
                    tableType: {
                        $cond: {
                            if: { $lte: ["$guests", 2] },
                            then: "smallTable",
                            else: "largeTable"
                        }
                    }
                },
                count: { $sum: 1 }
            }
        }
    ]).toArray();

    const parsedReservations = JSON.parse(JSON.stringify(reservations));

    const reservedTimes: ReservedTimes = parsedReservations.reduce((acc: ReservedTimes, reservation: {
        _id: {
            selectedTime: string,
            tableType: "smallTable" | "largeTable"
        },
        count: number
    }) => {
        const { selectedTime, tableType } = reservation._id;
        const count = reservation.count;

        if (!acc[tableType]) {
            acc[tableType] = {};
        }

        acc[tableType][selectedTime] = count;

        return acc;

    }, {
        smallTable: {},
        largeTable: {}
    });

    return reservedTimes;
}