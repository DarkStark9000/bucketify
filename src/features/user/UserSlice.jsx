 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: {
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserOnLogin(state, action) {
      state.isUser = action.payload;
    },
    clearUserOnLogout(state) {
      state.isUser = initialState.isUser;
    },
  },
});

export const { setUserOnLogin, clearUserOnLogout } = UserSlice.actions;
export default UserSlice.reducer;
