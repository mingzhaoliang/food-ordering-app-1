import { createSlice } from "@reduxjs/toolkit"
import { Order } from "../crud/model-type";

type InitialState = {
    activeOrder: Order | null,
    furtherAction: "checkout" | "track" | null,
}

const initialState: InitialState = {
    activeOrder: null,
    furtherAction: null,
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setActiveOrder(state, action) {
            state.activeOrder = action.payload;
        },
        removeActiveOrder(state) {
            state.activeOrder = null;
        },
        setFurtherAction(state, action) {
            state.furtherAction = action.payload;
        },
    },
})

export default orderSlice.reducer;
export const ordersActions = orderSlice.actions;