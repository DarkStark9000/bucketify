import { motion } from "motion/react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function HomeLogo() {
  return (
    <motion.div
      className="flex items-center gap-3 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon container with accent background */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)] shadow-sm transition-all duration-300 group-hover:shadow-[var(--shadow-glow)]">
        <ShoppingBasketIcon 
          sx={{ fontSize: 22 }} 
          className="text-[var(--color-text-inverse)]"
        />
      </div>
      
      {/* Brand name */}
      <div className="flex flex-col -space-y-1">
        <span className="font-display text-xl md:text-2xl tracking-tight text-[var(--color-text-primary)]">
          Bucketify
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-medium">
          Premium Shopping
        </span>
      </div>
    </motion.div>
  );
}

export default HomeLogo;
