import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showHeaderBackground: false,
    showMenu: false,
    activePage: "home",
};

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setShowHeaderBackground(state, action) {
            state.showHeaderBackground = action.payload;
        },
        setShowMenu(state, action) {
            state.showMenu = action.payload;
        },
        toggleMenu(state) {
            state.showMenu = !state.showMenu;
        },
        setActivePage(state, action) {
            state.activePage = action.payload;
        },
    },
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice.reducer;