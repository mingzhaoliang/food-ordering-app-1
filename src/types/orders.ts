import { DBCartItem } from "./cart";
import { DeliveryDetails } from "./users";

export interface DBOrder {
	_id: string;
	user_id: string;
	status: string;
	delivery_details: DeliveryDetails;
	items: DBCartItem[];
	subtotal: number;
	delivery_fee: number;
	total_amount: number;
	created_at: Date;
	expires_at: Date;
}
