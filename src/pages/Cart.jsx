import { motion, AnimatePresence } from "motion/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import CartTotal from "../components/CartTotal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Cart() {
  const productInCart = useSelector((state) => state.cart.inCart);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-4"
          >
            <ArrowBackIcon sx={{ fontSize: 16 }} />
            Continue Shopping
          </NavLink>

          <h1 className="font-display text-3xl md:text-4xl text-text-primary">Your Cart</h1>
          <p className="text-text-secondary mt-1">
            {productInCart.length} {productInCart.length === 1 ? "item" : "items"}
          </p>
        </motion.div>

        {productInCart.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="popLayout">
                {productInCart.map((product, index) => (
                  <CartCard key={product.name} product={product} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CartTotal />
              </div>
            </div>
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 md:py-24"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-bg-secondary flex items-center justify-center">
              <ShoppingCartIcon sx={{ fontSize: 32 }} className="text-text-muted" />
            </div>
            <h2 className="font-display text-2xl text-text-primary mb-2">Your cart is empty</h2>
            <p className="text-text-secondary mb-8 max-w-sm mx-auto">
              Looks like you haven&apos;t added any items to your cart yet. Start shopping to fill it up!
            </p>
            <NavLink to="/">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary">
                <ShoppingCartIcon sx={{ fontSize: 18 }} />
                Start Shopping
              </motion.button>
            </NavLink>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default Cart;
