import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReduser from "./features/user/userSlice"

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState:userReduser
    }
});