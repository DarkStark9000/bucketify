import { motion } from "motion/react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addSingularItem, deleteSingularItem, removeFromCart } from "../features/cart/CartSlice";

function CartCard({ product, index }) {
  const dispatch = useDispatch();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="card p-4 md:p-5 mb-4"
    >
      <div className="flex gap-4 md:gap-6">
        {/* Product Image */}
        <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg bg-bg-secondary overflow-hidden">
          <img className="w-full h-full object-contain p-2" src={product.imageurl} alt={product.name} />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Title and Remove */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-sm md:text-base font-medium text-text-primary line-clamp-2 flex-1">
              {product.name}
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(removeFromCart(product.name))}
              className="shrink-0 p-1.5 text-text-muted hover:text-error hover:bg-error/10 rounded-lg transition-colors"
              title="Remove item"
            >
              <DeleteOutlineIcon sx={{ fontSize: 18 }} />
            </motion.button>
          </div>

          {/* Price */}
          <span className="price price-small mb-3">${product.price.toFixed(2)}</span>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Quantity Controls and Line Total */}
          <div className="flex items-center justify-between">
            {/* Quantity Selector */}
            <div className="qty-selector">
              <button
                onClick={() => dispatch(deleteSingularItem(product.name))}
                disabled={product.quantity <= 1}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <RemoveIcon sx={{ fontSize: 16 }} />
              </button>
              <span className="text-sm font-medium text-text-primary">{product.quantity}</span>
              <button onClick={() => dispatch(addSingularItem(product.name))}>
                <AddIcon sx={{ fontSize: 16 }} />
              </button>
            </div>

            {/* Line Total */}
            <span className="text-base font-semibold text-text-primary">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CartCard;
