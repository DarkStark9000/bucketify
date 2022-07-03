import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function HomeLogo() {
  return (
    <div className="flex justify-center items-center gap-1 p-2 border-2 rounded border-emerald-500 bg-slate-900 sm:ml-0 lg:ml-8">
      <span className="text-emerald-500">
        <ShoppingBasketIcon sx={{ fontSize: 24 }} />
      </span>
      <span className="font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 sm:text-sm tracking-tighter lg:text-lg lg:tracking-tight ">
        Bucketify
      </span>
    </div>
  );
}

export default HomeLogo;
