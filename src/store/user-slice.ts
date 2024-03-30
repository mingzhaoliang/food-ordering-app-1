import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        _id: "",
        name: "",
        email: "",
        image: "",
        username: "",
        phoneNumber: "",
        street: "",
        city: "",
        state: "",
        postcode: "",
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = { ...action.payload };
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;