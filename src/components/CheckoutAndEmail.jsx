import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { clearCartOnCheckout } from "../features/cart/CartSlice";

function CheckoutAndEmail() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productInCart = useSelector((state) => state.cart.inCart);
  const total = productInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate checkout processing
    setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        dispatch(clearCartOnCheckout());
        navigate("/");
      }, 1500);
    }, 800);
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center justify-center gap-2 p-4 rounded-xl bg-success/10 border border-success/20"
      >
        <CheckCircleIcon className="text-success" />
        <span className="font-medium text-success">Order Placed!</span>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: isProcessing ? 1 : 1.01 }}
      whileTap={{ scale: isProcessing ? 1 : 0.99 }}
      onClick={handleCheckout}
      disabled={isProcessing}
      className="btn-primary w-full py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isProcessing ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Processing...
        </>
      ) : (
        <>
          <LockIcon sx={{ fontSize: 18 }} />
          Checkout - ${total.toFixed(2)}
        </>
      )}
    </motion.button>
  );
}

export default CheckoutAndEmail;
