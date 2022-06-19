import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { green } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

function Card(props) {
  const dispatch = useDispatch();
  const accent = green.A200;

  return (
    <div>
      <div className="flex flex-col rounded-lg w-48 h-96 outline-1 border	shadow-lg relative	">
        <img className="item-img rounded-lg" src={props.item.image} alt={props.item.title} />
        <span className="leading-tight text-sm text-black	tracking-tighter mt-2 mx-4">{props.item.title}</span>
        <span className="absolute bottom-12 left-4 text-emerald-500 font-bold p-1	text-lg	subpixel-antialiased tracking-normal">
          $ {props.item.price}
        </span>
        <button className="bg-slate-900 absolute bottom-4 right-4 left-4 font-bold text-base border-2 p-1 rounded-lg">
          <AddShoppingCartIcon style={{ color: accent }} className="mx-2" />
          <span
            onClick={() => dispatch(addToCart(props.item.title, props.item.price, 1))}
            className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          >
            add to cart
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card;
