import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { CartItem, ClientCartItem } from "@/lib/crud/model-type";
import { accessCart } from "../actions";

interface CartState {
    items: {
        [key: string]: CartItem;
    },
    changed: boolean;
    addedItems: number;
    error: string | null;
    checkout: boolean;
}

const initialState: CartState = {
    items: {},
    changed: false,
    addedItems: 0,
    error: null,
    checkout: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems(state, action: { payload: { [key: string]: CartItem } }) {
            state.items = action.payload;
        },
        addItem(state, action: { payload: ClientCartItem }) {
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
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setCheckout(state, action) {
            state.checkout = action.payload;
        }
    }
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

export const fetchCartData = () => {
    return async (dispatch: AppDispatch) => {
        const cartItems = await accessCart("get");
        dispatch(cartActions.setItems(cartItems));
    }
}

export const addItem = (item: ClientCartItem) => {
    return async (dispatch: any) => {
        const response = await accessCart("add", item.menu_id);
        if (response) {
            throw new Error(response.message);
        } else {
            dispatch(cartActions.addItem(item));
        }
    }
}

export const removeItem = (itemId: string) => {
    return async (dispatch: AppDispatch) => {
        const response = await accessCart("remove", itemId);
        if (response) {
            throw new Error(response.message);
        } else {
            dispatch(cartActions.removeItem(itemId));
        }
    }
}