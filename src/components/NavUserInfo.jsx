import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function NavUserInfo() {
  return (
    <div className="flex flex-col">
      <PersonIcon />
      <span className="leading-4	font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">User</span>
    </div>
  );
}

export default NavUserInfo;
