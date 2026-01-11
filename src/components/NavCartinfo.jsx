import { motion } from "motion/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function NavCartinfo() {
  const totalProducts = useSelector((state) => state.cart.inCart.length);

  return (
    <motion.div 
      className="relative flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-[var(--color-bg-secondary)]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Cart Icon */}
      <div className="relative">
        <ShoppingCartIcon 
          sx={{ fontSize: 22 }} 
          className="text-[var(--color-text-secondary)]"
        />
        
        {/* Badge */}
        {totalProducts > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 badge"
          >
            {totalProducts}
          </motion.span>
        )}
      </div>
      
      {/* Label */}
      <span className="hidden sm:block text-sm font-medium text-[var(--color-text-primary)]">
        Cart
      </span>
    </motion.div>
  );
}

export default NavCartinfo;
