import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { CartItem } from "@/lib/crud/model-type";
import { addItemToCart, getCart, removeItemFromCart } from "../crud/cart";

interface CartState {
    items: {
        [key: string]: CartItem & { quantity: number };
    },
    changed: boolean;
    addedItems: number;
}

const initialState: CartState = {
    items: {},
    changed: false,
    addedItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems(state, action: { payload: { [key: string]: CartItem & { quantity: number } } }) {
            state.items = action.payload;
        },
        addItem(state, action: { payload: CartItem }) {
            if (state.items.hasOwnProperty(action.payload.menu_id)) {
                state.items[action.payload.menu_id].quantity += 1;
            } else {
                state.items[action.payload.menu_id] = {
                    menu_id: action.payload.menu_id,
                    name: action.payload.name,
                    public_id: action.payload.public_id,
                    quantity: 1,
                    price: action.payload.price,
                    unit: action.payload.unit,
                }
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
        resetAddedItems(state) {
            state.addedItems = 0;
        }
    }
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

export const fetchCartData = (id: string) => {
    return async (dispatch: AppDispatch) => {
        const cartItems = await getCart(id);
        dispatch(cartActions.setItems(cartItems));
    }
}

export const addItem = (userId: string, item: CartItem) => {
    return async (dispatch: any) => {
        await addItemToCart(userId, item);
        dispatch(cartActions.addItem(item));
    }
}

export const removeItem = (userId: string, itemId: string) => {
    return async (dispatch: AppDispatch) => {
        await removeItemFromCart(userId, itemId);
        dispatch(cartActions.removeItem(itemId));
    }
}