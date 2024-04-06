export interface MenuItem {
    _id: string;
    course: string;
    category: string;
    public_id: string;
    name: string;
    reference: { owner: string, owner_url: string, platform: string, url: string };
    description: string;
    price: number;
    unit: { number: number, measurement: string };
    tags: string[];
    online_available: boolean;
}

export interface Cart {
    _id: string;
    user_id: string;
    items: { [key: string]: CartItem & { quantity: number } };
}

export interface CartItem {
    menu_id: string;
    name: string;
    public_id: string;
    // quantity: number;
    price: number;
    unit: { number: number, measurement: string };
}