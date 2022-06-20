import { useState } from "react";
import { motion } from "framer-motion";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { green } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

function ProductCard(props) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const accent = green.A200;

  const productInfo = {
    name: props.item.title,
    price: props.item.price,
    imageurl: props.item.image,
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <motion.div>
      <div className="bg-slate-50 flex flex-col rounded-lg w-48 h-96 outline-1 border	shadow-lg relative">
        <img className="item-img rounded-lg" src={props.item.image} alt={props.item.title} />
        <span className="leading-tight text-sm text-black	tracking-tighter mt-2 mx-4">{props.item.title}</span>
        <span className="absolute bottom-12 left-4 text-emerald-500 font-bold p-1	text-lg	subpixel-antialiased tracking-normal">
          $ {props.item.price}
        </span>
        <select
          className="m-2 w-12 h-6 absolute bottom-12 right-4 border-2 rounded text-base"
          name="quantity"
          id="quantity"
          onChange={handleQuantityChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <motion.button
          variant="contained"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => dispatch(addToCart({ ...productInfo, quantity }))}
          className="bg-slate-900 absolute bottom-4 right-4 left-4 font-bold text-base border-2 p-1 rounded-lg"
        >
          <AddShoppingCartIcon style={{ color: accent }} className="mx-2" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            add to cart
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
