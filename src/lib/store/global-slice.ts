import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    toast: {
        status: "success" | "error" | "",
        message: string,
    } | null,
}

const initialState: InitialState = {
    toast: null,
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setToast(state, action) {
            state.toast = { ...action.payload };
        },
        clearToast(state) {
            state.toast = null;
        },
    }
})

export default globalSlice.reducer;
export const globalActions = globalSlice.actions;