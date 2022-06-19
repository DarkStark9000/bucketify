import React from "react";
import { NavLink } from "react-router-dom";
import NavCartinfo from "./NavCartinfo";
import NavUserInfo from "./NavUserInfo";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex justify-center items-center p-4 m-4">
      <SearchBar />
      <div className="m-auto mr-8 flex justify-center items-center gap-x-8">
        <NavUserInfo />
        <NavLink to="/cart">
          <NavCartinfo />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
