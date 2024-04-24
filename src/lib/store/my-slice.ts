import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    activeOrder: string | null,
    activeReservation: string | null,
    furtherAction: "checkout" | "track" | null,
    cancelOrder: boolean,
}

const initialState: InitialState = {
    activeOrder: null,
    activeReservation: null,
    furtherAction: null,
    cancelOrder: false,
}

const mySlice = createSlice({
    name: 'my',
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

        setActiveReservation(state, action) {
            state.activeReservation = action.payload === state.activeReservation ? null : action.payload;
        },
    },
})

export default mySlice.reducer;
export const myActions = mySlice.actions;