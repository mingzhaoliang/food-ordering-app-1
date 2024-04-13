import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import menuReducer from "./menu-slice";
import navigationReducer from "./navigation-slice";
import cartReducer from "./cart-slice";
import ordersReducer from "./orders-slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            navigation: navigationReducer,
            menu: menuReducer,
            cart: cartReducer,
            orders: ordersReducer,
        }
    });

}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']