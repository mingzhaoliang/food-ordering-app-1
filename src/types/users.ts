export interface DBUser {
	_id: string;
	name: string;
	email: string;
	image: string;
	username: string;
	mobileNumber: string;
	street: string;
	city: string;
	state: string;
	postcode: string;
}

export interface DeliveryDetails {
	username: string;
	mobileNumber: string;
	street: string;
	city: string;
	state: string;
	postcode: string;
}
