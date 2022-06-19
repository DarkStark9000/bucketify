import React from "react";
import NavCartinfo from "./NavCartinfo";
import NavUserInfo from "./NavUserInfo";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="flex justify-center items-center p-4 m-4">
      <SearchBar />
      <div className="m-auto mr-8 flex justify-center items-center gap-x-8">
        <NavUserInfo />
        <NavCartinfo />
      </div>
    </div>
  );
}

export default Navbar;
