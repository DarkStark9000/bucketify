/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: [""],
  price: [""],
  quantity: [""],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { name, price, quantity }) => {
      state.name.push(name);
      state.price.push(price);
      state.quantity.push(quantity);
    },
    removeFromCart: (state, { name }) => {
      const index = state.name.indexOf(name);
      state.name.splice(index, 1);
      state.price.splice(index, 1);
      state.quantity.splice(index, 1);
    },
  },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
