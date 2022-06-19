import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/CartSlice";

function Cart() {
  const productInCart = useSelector((state) => state.cart.inCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      {productInCart.map((product) => (
        <div key={product.name}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
          <button onClick={() => dispatch(removeFromCart(product.name))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
