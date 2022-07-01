import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { collection, doc, setDoc } from "firebase/firestore";
import { clearCartOnCheckout } from "../features/cart/CartSlice";
import { db } from "../utils/Firebase";

function CheckoutAndEmail() {
  const dispatch = useDispatch();

  const productInCart = useSelector((state) => state.cart.inCart);
  const email = useSelector((state) => state.user.isUser.email);
  const name = useSelector((state) => state.user.isUser.displayName);

  const total = productInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  let message = productInCart
    .map((product) => `${product.name} - ${product.quantity} - ${product.quantity * product.price}`)
    .join("<br/>");

  message += `<br/><br/><b>Total Amount: ${total} </b>`;

  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    emailjs
      .send("service_bucketify_admin", "template_bucketify_check", { name, email, message }, "7WKKmh_obRY1AmSai")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });

    dispatch(clearCartOnCheckout());
    // saveOrderDetailsOfUser();

    navigate("/");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleCheckout}>
        Checkout and Place Order
      </Button>
    </div>
  );
}

export default CheckoutAndEmail;
