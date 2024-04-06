import { createSlice } from "@reduxjs/toolkit"
import { getUser } from "../crud/users";

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

export default userSlice.reducer;
export const userActions = userSlice.actions;

export const fetchUserData = (id: string) => {
    return async (dispatch: any) => {
        const user = await getUser(id);
        dispatch(userActions.setUser(user));
    }
}