import { createSlice } from "@reduxjs/toolkit";
import { DBUser } from "@/types/users";

type InitialState = {
	user: DBUser;
	activePage: string;
	toast: {
		status: "success" | "error" | "";
		message: string;
	} | null;
};

const initialState: InitialState = {
	user: {
		_id: "",
		name: "",
		email: "",
		image: "",
		username: "",
		mobileNumber: "",
		street: "",
		city: "",
		state: "",
		postcode: "",
	},
	activePage: "home",
	toast: null,
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setUser(state, action: { payload: DBUser }) {
			state.user = { ...action.payload };
		},
		patchUser(state, action) {
			state.user = { ...state.user, ...action.payload };
		},
		setToast(state, action) {
			state.toast = { ...action.payload };
		},
		clearToast(state) {
			state.toast = null;
		},
		setActivePage(state, action) {
			state.activePage = action.payload;
		},
	},
});

export default globalSlice.reducer;
export const globalActions = globalSlice.actions;
