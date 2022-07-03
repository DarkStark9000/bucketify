import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeLogo from "./HomeLogo";
import NavCartinfo from "./NavCartinfo";
import NavUserInfo from "./NavUserInfo";
import SearchBar from "./SearchBar";
import Logout from "./Logout";

function Navbar() {
  const user = useSelector((state) => state.user.isUser);

  return (
    <div className="sticky top-0 z-50 shadow-sm bg-white bg-opacity-50 bg-blur-lg">
      <div className="flex justify-center items-center p-4 ml-2 mr-4">
        <NavLink to="/">
          <HomeLogo />
        </NavLink>
        <SearchBar />
        <div className="m-auto mr-2 flex justify-center items-center gap-x-6">
          <NavUserInfo />
          <NavLink to="/cart">
            <NavCartinfo />
          </NavLink>
          {user.uid ? <Logout /> : <div />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
