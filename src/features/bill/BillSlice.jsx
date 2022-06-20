/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forBill: [],     // { name, quantity, totalPrice}
};

export const BillSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {},
});
export const { addToCart, removeFromCart, addSingularItem, deleteSingularItem } = BillSlice.actions;
export default BillSlice.reducer;
