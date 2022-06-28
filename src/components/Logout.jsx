import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { clearUserOnLogout } from "../features/user/UserSlice";
import app from "../utils/Firebase";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleLogoutClick = () => {
    signOut(auth)
      .then(() => {
        const loggedOutUser = {
          uid: "",
          accessToken: "",
          displayName: "",
          email: "",
          photoURL: "",
        };
        dispatch(clearUserOnLogout(loggedOutUser));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleLogoutClick}>
        Logout
      </Button>
    </div>
  );
}

export default Logout;
