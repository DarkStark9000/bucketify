import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../utils/Firebase";

function UserProfile() {
  const user = useSelector((state) => state.user.isUser);
  const dispatch = useDispatch();

  const readData = async () => {
    const data = await getDocs(db, "users", "userId", user.uid);
    dispatch({ type: "SET_USER", payload: data });
  };
  useEffect(() => {
    readData();
  }, [user]);

  return (
    <div>
      <motion.div>
        <h1>User Profile</h1>
      </motion.div>
    </div>
  );
}

export default UserProfile;
