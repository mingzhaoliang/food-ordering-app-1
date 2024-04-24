import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import homeReducer from "./home-slice";
import menuReducer from "./menu-slice";
import navigationReducer from "./navigation-slice";
import cartReducer from "./cart-slice";
import myReducer from "./my-slice";
import globalReducer from "./global-slice";
import reservationReducer from "./reservation-slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            navigation: navigationReducer,
            home: homeReducer,
            menu: menuReducer,
            cart: cartReducer,
            my: myReducer,
            global: globalReducer,
            reservation: reservationReducer,
        }
    });

}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']