import React from "react";
import Navbar from "../components/Navbar";
import Products from "./Products";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="-mt-2 mb-4 text-2xl	font-bold text-center	p-6">Products Home</h1>
      <Products />
    </div>
  );
}

export default Home;
