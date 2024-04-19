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
                    course: action.payload.course,
                    quantity: 1,
                    price: action.payload.price,
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