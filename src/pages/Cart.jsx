import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import CartTotal from "../components/CartTotal";

function Cart() {
  const productInCart = useSelector((state) => state.cart.inCart);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl	font-bold text-center	p-6">Cart Checkout</h1>
      {productInCart.map((product) => (
        <CartCard key={product.name} product={product} />
      ))}
      <div className="absolute right-14 top-20">
        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;
