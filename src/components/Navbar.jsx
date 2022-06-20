import React from "react";
import { NavLink } from "react-router-dom";
import HomeLogo from "./HomeLogo";
import NavCartinfo from "./NavCartinfo";
import NavUserInfo from "./NavUserInfo";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-stone-200">
      <div className="flex justify-center items-center p-4 mx-4">
        <NavLink to="/">
          <HomeLogo />
        </NavLink>
        <SearchBar />
        <div className="m-auto mr-8 flex justify-center items-center gap-x-8">
          <NavUserInfo />
          <NavLink to="/cart">
            <NavCartinfo />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
