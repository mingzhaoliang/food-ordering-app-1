import clientPromise from "@/lib/clientPromise";
import { DBReservation, ReservedTimes } from "@/types/reservations";

export const getReservations = async (userId: string): Promise<DBReservation[]> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const data = await db
		.collection("reservations")
		.find<DBReservation>({ userId: userId })
		.sort({ selectedDate: -1 })
		.toArray();

	const processedData = data.map((reservation) => ({
		...reservation,
		_id: reservation._id.toString(),
		selectedDate: new Date(reservation.selectedDate),
		userId: reservation.userId!.toString(),
	}));

	return processedData;
};

export const getReservedTimes = async (selectedDate: Date): Promise<ReservedTimes> => {
	const client = await clientPromise;
	const db = client.db("restaurant");

	const reservations = await db
		.collection("reservations")
		.aggregate([
			{
				$match: { selectedDate },
			},
			{
				$group: {
					_id: {
						selectedTime: "$selectedTime",
						tableType: {
							$cond: {
								if: { $lte: ["$guests", 2] },
								then: "smallTable",
								else: "largeTable",
							},
						},
					},
					count: { $sum: 1 },
				},
			},
		])
		.toArray();

	const parsedReservations = JSON.parse(JSON.stringify(reservations));

	const reservedTimes: ReservedTimes = parsedReservations.reduce(
		(
			acc: ReservedTimes,
			reservation: {
				_id: {
					selectedTime: string;
					tableType: "smallTable" | "largeTable";
				};
				count: number;
			}
		) => {
			const { selectedTime, tableType } = reservation._id;
			const count = reservation.count;

			if (!acc[tableType]) {
				acc[tableType] = {};
			}

			acc[tableType][selectedTime] = count;

			return acc;
		},
		{
			smallTable: {},
			largeTable: {},
		}
	);

	return reservedTimes;
};
