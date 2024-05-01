export interface DBCart {
	_id: string;
	user_id: string;
	items: { [key: string]: DBCartItem };
}

export interface DBCartItem {
	menu_id: string;
	name: string;
	public_id: string;
	course: string;
	quantity: number;
	price: number;
}
