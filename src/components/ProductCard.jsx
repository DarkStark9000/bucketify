import { useState } from "react";
import { motion } from "motion/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

// Fallback image for broken/missing product images
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80";

function ProductCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const dispatch = useDispatch();

  const productInfo = {
    name: item.title,
    price: item.price ?? 0,
    imageurl: item.image || FALLBACK_IMAGE,
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productInfo, quantity }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      <div className="card group overflow-hidden flex flex-col h-full">
        {/* Image Container */}
        <div className="product-image">
          <img
            src={imgError ? FALLBACK_IMAGE : item.image || FALLBACK_IMAGE}
            alt={item.title || "Product"}
            loading="lazy"
            onError={() => setImgError(true)}
          />

          {/* Category badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-text-muted bg-(--color-bg-surface)/90 backdrop-blur-sm rounded-full border border-border">
            {item.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4">
          {/* Title */}
          <h3 className="font-body text-sm font-medium text-text-primary line-clamp-2 mb-2 min-h-[2.5rem]">
            {item.title}
          </h3>

          {/* Rating */}
          {item.rating && (
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(item.rating.rate) ? "text-warning" : "text-border"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-text-muted">({item.rating.count})</span>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Price and Actions */}
          <div className="flex items-center justify-between gap-2 pt-3 border-t border-border">
            <span className="price">${(item.price ?? 0).toFixed(2)}</span>

            <div className="flex items-center gap-2">
              {/* Quantity select */}
              <select
                className="h-9 px-2 text-sm bg-bg-secondary border border-border rounded-lg cursor-pointer focus:outline-none focus:border-accent transition-colors"
                name="quantity"
                id={`quantity-${item.id}`}
                value={quantity}
                onChange={handleQuantityChange}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>

              {/* Add to cart button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className={`btn-primary h-9 px-3 text-sm ${isAdded ? "bg-success" : ""}`}
                style={{
                  minWidth: "44px",
                  transition: "background-color 0.2s ease",
                }}
              >
                <AddShoppingCartIcon sx={{ fontSize: 18 }} />
                <span className="hidden sm:inline">{isAdded ? "Added!" : "Add"}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
