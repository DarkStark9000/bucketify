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
      <div className="flex flex-row justify-center">
        <div className="mx-auto mr-0">
          {productInCart.map((product) => (
            <CartCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mx-auto mr-8 w-96 text-sm sticky top-4">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
