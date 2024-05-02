import { DBMenuItem } from "@/types/menu";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	activeCourse: "antipasti" | "primi" | "secondi" | "dolci";
	previewMenuItems: DBMenuItem[];
	previewScrollable: boolean;
};

const initialState: InitialState = {
	activeCourse: "antipasti",
	previewMenuItems: [],
	previewScrollable: false,
};

const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setActiveCourse(state, action) {
			state.activeCourse = action.payload;
		},
		setPreviewMenuItems(state, action) {
			state.previewMenuItems = action.payload;
		},
		setPreviewScrollable(state, action) {
			state.previewScrollable = action.payload;
		},
	},
});

export default homeSlice.reducer;
export const homeActions = homeSlice.actions;
