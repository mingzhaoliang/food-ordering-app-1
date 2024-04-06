import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeCategory: "appetizers",
    showCartModal: false,
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload
        },
        setShowCartModal(state, action) {
            state.showCartModal = action.payload
        }
    }
})

export default menuSlice.reducer;

export const menuActions = menuSlice.actions;