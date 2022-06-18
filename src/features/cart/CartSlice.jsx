import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value += 1;
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
