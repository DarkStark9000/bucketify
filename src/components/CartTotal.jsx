import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function CartTotal() {
  //   const [total, setTotal] = useState(0);

  const productInCart = useSelector((state) => state.cart.inCart);

  return (
    <div>
      <TableContainer sx={{ maxWidth: 420 }} component={Paper}>
        <Table aria-label="Total Bill table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productInCart.map((product) => (
              <TableRow key={product.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="right"> {product.quantity} </TableCell>
                <TableCell align="right"> {product.price * product.quantity} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CartTotal;
