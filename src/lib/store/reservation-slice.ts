import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    guests: number;
    selectedTime: string;
    contactDetails: {
        name: string;
        email: string;
        mobileNumber: string;
        specialRequests: string;
    },
    readyToSubmit: boolean;
    invalidFields: {
        name: string;
        email: string;
        mobileNumber: string;
        specialRequests: string;
    },
    availableTimes: string[]
}

const initialState: InitialState = {
    guests: 2,
    selectedTime: "12:00 pm",
    contactDetails: {
        name: "",
        email: "",
        mobileNumber: "",
        specialRequests: ""
    },
    readyToSubmit: false,
    invalidFields: {
        name: "",
        email: "",
        mobileNumber: "",
        specialRequests: "",
    },
    availableTimes: [],
}

const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        setGuests(state, action) {
            state.guests = action.payload;
        },
        setTime(state, action) {
            state.selectedTime = action.payload;
        },
        setContactDetails(state, action) {
            state.contactDetails = {
                ...state.contactDetails,
                ...action.payload
            };
        },
        setReadyToSubmit(state, action) {
            state.readyToSubmit = action.payload;
        },
        setInvalidFields(state, action) {
            state.invalidFields = {
                ...state.invalidFields,
                ...action.payload
            };
        },
        clearContactDetails(state) {
            state.contactDetails = {
                // name: "",
                // email: "",
                // mobileNumber: "",
                ...state.contactDetails,
                specialRequests: ""
            };
        },
        setAvailableTimes(state, action) {
            state.availableTimes = action.payload;
        }
    }
})

export default reservationSlice.reducer;
export const reservationActions = reservationSlice.actions;