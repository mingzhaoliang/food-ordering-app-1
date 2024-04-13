import { createSlice } from "@reduxjs/toolkit"
import { Order } from "../crud/model-type";

type InitialState = {
    activeOrder: string | null,
    furtherAction: "checkout" | "track" | null,
    cancelOrder: boolean,
}

const initialState: InitialState = {
    activeOrder: null,
    furtherAction: null,
    cancelOrder: false,
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setActiveOrder(state, action) {
            state.activeOrder = action.payload === state.activeOrder ? null : action.payload;
        },
        removeActiveOrder(state) {
            state.activeOrder = null;
        },
        setFurtherAction(state, action) {
            state.furtherAction = action.payload;
        },
        setCancelOrder(state, action) {
            state.cancelOrder = action.payload;
        },
    },
})

export default orderSlice.reducer;
export const ordersActions = orderSlice.actions;