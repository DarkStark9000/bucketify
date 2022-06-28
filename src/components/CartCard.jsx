import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addSingularItem, deleteSingularItem, removeFromCart } from "../features/cart/CartSlice";

function CartCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div key={product.name} className="claymorph relative border shadow-md rounded-md p-4 w-96 h-32 flex mb-4">
      <img className="h-18 w-24" src={product.imageurl} alt={product.name} />
      <div className="flex flex-col justify-between ml-2">
        <div className="px-4 pt-2 flex flex-row justify-center item-center leading-3 flex-wrap">
          <span className="leading-tight text-sm font-normal text-black	tracking-tighter w-40">{product.name}</span>
          <span className="leading-tight absolute right-4 text-emerald-400 text-md	color font-bold subpixel-antialiased tracking-normal">
            $ {product.price}
          </span>
        </div>
        <span className="mx-4 absolute bottom-4 border rounded flex justify-center items-center	leading-tight text-black tracking-normal">
          <button onClick={() => dispatch(deleteSingularItem(product.name))}>
            <RemoveIcon />
          </button>
          <span className="px-2 text-base">{product.quantity}</span>
          <button onClick={() => dispatch(addSingularItem(product.name))}>
            <AddIcon />
          </button>
        </span>
      </div>

      <button
        className="text-red-500	border rounded p-0.5 absolute bottom-4 right-4"
        onClick={() => dispatch(removeFromCart(product.name))}
      >
        <DeleteForeverIcon className="text-red-500	" />
        Remove
      </button>
    </div>
  );
}

export default CartCard;
