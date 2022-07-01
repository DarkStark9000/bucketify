import PersonIcon from "@mui/icons-material/Person";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setUserOnLogin } from "../features/user/UserSlice";

import app from "../utils/Firebase";

function NavUserInfo() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const user = useSelector((state) => state.user.isUser);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userLogIn = {
          uid: result.user.uid,
          accessToken: result.user.accessToken,
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          address: "",
        };
        dispatch(setUserOnLogin(userLogIn));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cursor-pointer flex flex-col justify-center" onClick={handleLoginClick}>
      {user.photoURL ? (
        <img className="h-6 w-6" sx={{ borderRadius: "50%" }} src={user.photoURL} alt="user" />
      ) : (
        <PersonIcon />
      )}
      <span className="leading-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        {user.displayName ? user.displayName : "Log In"}
      </span>
    </div>
  );
}

export default NavUserInfo;
