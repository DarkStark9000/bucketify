import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { indigo } from "@mui/material/colors";

function SearchBar() {
  const accent = indigo.A400;
  return (
    <div className="hidden md:block absolute mx-auto">
      <div className="flex flex-row gap-1 justify-center items-center	">
        <SearchIcon style={{ color: accent }} />
        <input
          className="border-2 border-indigo-600 rounded outline-0 md: w-52 lg:w-96 h-8 text-lg tracking-tighter p-2 mx-auto"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
