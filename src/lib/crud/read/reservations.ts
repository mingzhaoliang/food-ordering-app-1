import clientPromise from "@/lib/clientPromise";
import { DBReservation, ReservedTimes } from "@/types/reservations";
import { availableReservationTimes, availableTableNumber } from "@/utils/data";

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

export const getAvailableTimes = async (selectedDate: Date) => {
	const defaultAvailableTimes = availableReservationTimes[selectedDate.getDay()];
	const reservedTimes = await getReservedTimes(selectedDate);

	const availableTimes: { [key: string]: { [key: string]: number } } = {
		smallTable: {},
		largeTable: {},
	};

	Object.keys(reservedTimes).forEach((tableType) => {
		const reservedTimesForTable = reservedTimes[tableType as "smallTable" | "largeTable"];

		Object.keys(defaultAvailableTimes).forEach((timeKey) => {
			const timeString = defaultAvailableTimes[Number(timeKey)];
			const previouseTimeString = defaultAvailableTimes[Number(timeKey) - 1];
			const laterTimeString = defaultAvailableTimes[Number(timeKey) + 1];

			if (!availableTimes[tableType as "smallTable" | "largeTable"][timeString]) {
				availableTimes[tableType as "smallTable" | "largeTable"][timeString] = 0;
			}

			let reservedNumber = 0;

			if (reservedTimesForTable[timeString]) {
				reservedNumber += reservedTimesForTable[timeString];
			}

			if (previouseTimeString && reservedTimesForTable[previouseTimeString]) {
				reservedNumber += reservedTimesForTable[previouseTimeString];
			}

			if (laterTimeString && reservedTimesForTable[laterTimeString]) {
				reservedNumber += reservedTimesForTable[laterTimeString];
			}

			availableTimes[tableType as "smallTable" | "largeTable"][timeString] = Math.max(
				0,
				availableTableNumber[tableType as "smallTable" | "largeTable"] - reservedNumber
			);
		});
	});

	const result: {
		[key: number]: { [key: string]: number };
	} = {
		1: { ...availableTimes.smallTable },
		2: { ...availableTimes.smallTable },
		3: { ...availableTimes.largeTable },
		4: { ...availableTimes.largeTable },
	};

	return result;
};
