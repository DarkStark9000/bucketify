import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/CartSlice";
import UserReducer from "../features/user/UserSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    user: UserReducer,
  },
});

export default store;
