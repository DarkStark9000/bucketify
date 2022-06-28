import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function CheckoutAndEmail() {
  const productInCart = useSelector((state) => state.cart.inCart);

  const email = useSelector((state) => state.user.isUser.email);
  const name = useSelector((state) => state.user.isUser.displayName);

  const total = productInCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  let message = productInCart
    .map((product) => `${product.name} - ${product.quantity} - ${product.quantity * product.price}`)
    .join("\n");

  message.replace(/\n/g, "<br>");
  message.replace(/\s/g, "&nbsp;");

  message += `\n\n<b>Total Amount: ${total} </b>`;

  // const dispatch = useDispatch();
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
