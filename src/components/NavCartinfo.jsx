import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function NavCartinfo() {
  const totalProducts = useSelector((state) => state.cart.inCart.length);

  return (
    <div className="flex flex-col">
      <ShoppingCartIcon />
      <span className="leading-4	font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Cart: {totalProducts}
      </span>
    </div>
  );
}

export default NavCartinfo;
