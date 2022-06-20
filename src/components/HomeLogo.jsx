import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function HomeLogo() {
  return (
    <div className="ml-8 flex justify-center items-center gap-1 p-2 border-2 rounded border-emerald-500 bg-slate-900	">
      <span className="text-emerald-500">
        <ShoppingBasketIcon />
      </span>
      <span className="font-sans text-lg tracking-tight font-bold  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Bucketify
      </span>
    </div>
  );
}

export default HomeLogo;
