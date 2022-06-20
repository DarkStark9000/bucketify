/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inCart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      console.log(product);
      if (state.inCart.find((p) => p.name === product.name)) {
        state.inCart.find((p) => p.name === product.name).quantity += 1;
      } else {
        state.inCart.push(product);
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.inCart = state.inCart.filter((item) => item.name !== product);
    },
    addSingularItem(state, action) {
      const product = action.payload;
      state.inCart.find((p) => p.name === product).quantity += 1;
    },
    deleteSingularItem(state, action) {
      const product = action.payload;
      state.inCart.find((p) => p.name === product).quantity -= 1;
    },
  },
});
export const { addToCart, removeFromCart, addSingularItem, deleteSingularItem } = CartSlice.actions;
export default CartSlice.reducer;
