import { createSlice } from "@reduxjs/toolkit";
import { DBCartItem } from "@/types/cart";

interface CartState {
	items: { [key: string]: DBCartItem };
	changed: boolean;
	addedItems: number;
	timer1: NodeJS.Timeout | undefined;
	timer2: NodeJS.Timeout | undefined;
	checkout: boolean;
}

const initialState: CartState = {
	items: {},
	changed: false,
	addedItems: 0,
	timer1: undefined,
	timer2: undefined,
	checkout: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setItems(state, action: { payload: { [key: string]: DBCartItem } }) {
			state.items = action.payload;
		},
		addItem(state, action: { payload: DBCartItem }) {
			const { menu_id } = action.payload;
			if (state.items.hasOwnProperty(menu_id)) {
				state.items[menu_id].quantity += 1;
			} else {
				state.items[menu_id] = { ...action.payload, quantity: 1 };
			}
		},
		removeItem(state, action: { payload: string }) {
			if (state.items.hasOwnProperty(action.payload)) {
				state.items[action.payload].quantity -= 1;
				if (state.items[action.payload].quantity === 0) {
					delete state.items[action.payload];
				}
			}
		},
		removeAllItems(state) {
			state.items = {};
		},
		setChanged(state, action) {
			state.changed = action.payload;
		},
		setAddedItems(state) {
			state.addedItems += 1;
		},
		setTimer1(state, action) {
			state.timer1 = action.payload;
		},
		setTimer2(state, action) {
			state.timer2 = action.payload;
		},
		clearTimers(state) {
			if (state.timer1) {
				clearTimeout(state.timer1);
			}
			if (state.timer2) {
				clearTimeout(state.timer2);
			}
		},
		resetAddedItems(state) {
			state.addedItems = 0;
		},
		setCheckout(state, action) {
			state.checkout = action.payload;
		},
	},
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
