export interface DBReservation {
	_id: string;
	userId: string;
	selectedDate: Date;
	guests: number;
	selectedTime: string;
	name: string;
	email: string;
	mobileNumber: string;
	specialRequests: string;
	status?: string;
}

export interface ReservedTimes {
	smallTable: { [key: string]: number };
	largeTable: { [key: string]: number };
}
