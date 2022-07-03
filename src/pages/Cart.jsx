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
      <h1 className="text-2xl	font-bold text-fuchsia-50 text-center	p-6">Cart Checkout</h1>
      <div className="sm:mb-8 flex flex-col justify-center md:flex-col lg:flex-row ">
        <div className="mx-12 lg:mx-auto lg:mr-0">
          {productInCart.map((product) => (
            <CartCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mx-12 lg:mx-auto lg:mr-8 w-72 md:w-80 lg:w-96 text-sm sticky top-4">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
