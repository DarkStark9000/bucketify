import { motion } from "motion/react";
import { useSelector } from "react-redux";
import CheckoutAndEmail from "./CheckoutAndEmail";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function CartTotal() {
  const productInCart = useSelector((state) => state.cart.inCart);

  const subtotal = productInCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card-elevated p-6"
    >
      <h2 className="font-display text-xl text-[var(--color-text-primary)] mb-6">
        Order Summary
      </h2>

      {/* Line Items */}
      <div className="space-y-3 mb-6">
        {productInCart.map((product) => (
          <div key={product.name} className="flex justify-between text-sm">
            <span className="text-[var(--color-text-secondary)] truncate max-w-[60%]">
              {product.name} <span className="text-[var(--color-text-muted)]">x{product.quantity}</span>
            </span>
            <span className="text-[var(--color-text-primary)] font-medium">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="divider" />

      {/* Subtotal */}
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[var(--color-text-secondary)]">Subtotal</span>
        <span className="text-[var(--color-text-primary)]">${subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between text-sm mb-4">
        <span className="text-[var(--color-text-secondary)]">Shipping</span>
        <span className={shipping === 0 ? "text-[var(--color-success)] font-medium" : "text-[var(--color-text-primary)]"}>
          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      {/* Free shipping notice */}
      {subtotal < 50 && subtotal > 0 && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/20">
          <LocalShippingIcon sx={{ fontSize: 18 }} className="text-[var(--color-accent)]" />
          <p className="text-xs text-[var(--color-accent)]">
            Add ${(50 - subtotal).toFixed(2)} more for free shipping
          </p>
        </div>
      )}

      <div className="divider" />

      {/* Total */}
      <div className="flex justify-between items-baseline mb-6">
        <span className="text-base font-medium text-[var(--color-text-primary)]">Total</span>
        <span className="text-2xl font-display text-[var(--color-text-primary)]">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout Button */}
      {productInCart.length > 0 && <CheckoutAndEmail />}

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
          <VerifiedUserIcon sx={{ fontSize: 14 }} />
          <span className="text-xs">Secure Checkout</span>
        </div>
        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
          <LocalShippingIcon sx={{ fontSize: 14 }} />
          <span className="text-xs">Fast Delivery</span>
        </div>
      </div>
    </motion.div>
  );
}

export default CartTotal;
