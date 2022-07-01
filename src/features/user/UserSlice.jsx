/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";

const initialState = {
  isUser: [
    {
      uid: "",
      accessToken: "",
      displayName: "",
      email: "",
      photoURL: "",
      address: "",
    },
  ],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserOnLogin(state, action) {
      state.isUser = action.payload;

      const toAddUser = {
        email: action.payload.email,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
        address: action.payload.address,
      };
      setDoc(doc(db, "users", toAddUser.email), toAddUser);
    },
    clearUserOnLogout(state, action) {
      state.isUser = action.payload;
    },
  },
});
export const { setUserOnLogin, clearUserOnLogout, addUserToFirebaseDatabase } = UserSlice.actions;
export default UserSlice.reducer;
