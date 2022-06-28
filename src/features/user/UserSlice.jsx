/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: [
    {
      uid: "",
      accessToken: "",
      displayName: "",
      email: "",
      photoURL: "",
    },
  ],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserOnLogin(state, action) {
      state.isUser = action.payload;
    },
    clearUserOnLogout(state, action) {
      state.isUser = action.payload;
    },
  },
});
export const { setUserOnLogin, clearUserOnLogout } = UserSlice.actions;
export default UserSlice.reducer;
