export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface ReservationDetails {
	selectedDate: Date;
	guests: number;
	selectedTime: string;
	name: string;
	email: string;
	mobileNumber: string;
	specialRequests: string;
}

export interface Reservation extends ReservationDetails {
	userId: string;
	status: string;
}

export interface DBReservation extends Reservation {
	_id: string;
}

export interface ReservedTimes {
	smallTable: { [key: string]: number };
	largeTable: { [key: string]: number };
}
