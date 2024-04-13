import { ObjectId } from "mongodb";

export interface User {
    _id: string;
    username: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
}

export interface MenuItem {
    _id: string;
    course: string;
    category: string;
    public_id: string;
    name: string;
    reference: { owner: string, owner_url: string, platform: string, url: string };
    description: string;
    price: number;
    tags: string[];
    online_available: boolean;
}

export interface Cart {
    _id: string;
    user_id: string;
    items: { [key: string]: CartItem };
}

export interface CartItem {
    menu_id: string;
    name: string;
    public_id: string;
    course: string;
    quantity: number;
    price: number;
}

export interface ClientCartItem {
    menu_id: string;
    name: string;
    public_id: string;
    course: string;
    price: number;
}

export interface Order {
    _id: string;
    user_id: string;
    status: string;
    delivery_details: DeliveryDetails;
    items: CartItem[];
    subtotal: number;
    delivery_fee: number;
    total_amount: number;
    created_at: Date;
    expires_at: Date;
}

export interface DeliveryDetails {
    username: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
}