import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import CheckoutAndEmail from "./CheckoutAndEmail";

function CartTotal() {
  const [total, setTotal] = useState(0);

  const productInCart = useSelector((state) => state.cart.inCart);

  return (
    <div className="sticky top-0">
      <div className="flex flex-col justify-center items-center	">
        <TableContainer sx={{ maxWidth: 420 }} component={Paper}>
          <Table aria-label="Total Bill table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell sx={{ padding: 2 }} align="right">
                  Total Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productInCart.map((product) => (
                <TableRow key={product.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell
                    sx={{
                      fontSize: "0.7rem",
                    }}
                    component="th"
                    scope="row"
                  >
                    {product.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "0.7rem",
                    }}
                    align="right"
                  >
                    {product.quantity}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "0.7rem",
                      padding: 0,
                      paddingRight: 2,
                    }}
                    align="right"
                  >
                    $ {(product.price * product.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  colSpan={2}
                  align="right"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    padding: 0,
                    paddingRight: 1,
                  }}
                  onChange={(e) => setTotal(e.target.value)}
                >
                  $ {productInCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {productInCart.length > 0 && (
          <div className="checkoutButton my-4 p-2 ">
            <CheckoutAndEmail />
          </div>
        )}
      </div>
    </div>
  );
}

export default CartTotal;
