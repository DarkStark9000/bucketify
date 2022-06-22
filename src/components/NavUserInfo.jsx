import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../utils/Firebase";

function NavUserInfo() {
  const [user, setUser] = useState({
    displayName: "Log In",
    email: "",
    photoURL: "",
  });

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        setUser(newUser);
        console.log(user.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="cursor-pointer flex flex-col justify-center" onClick={handleClick}>
      {user.photoURL ? (
        <img className="h-6 w-6" sx={{ borderRadius: "50%" }} src={user.photoURL} alt="user" />
      ) : (
        <PersonIcon />
      )}
      <span className="leading-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        {user.displayName}
      </span>
    </div>
  );
}

export default NavUserInfo;
