/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inCart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { name, price, quantity }) => {
      const product = { name, price, quantity };
      state.inCart.push(product);
    },
    removeFromCart: (state, { name }) => {
      state.inCart = state.inCart.filter((product) => product.name !== name);
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
