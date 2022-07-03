import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [shopData, setShopData] = useState([]);

  const getShopData = async () => {
    await axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((response) => {
        setShopData(response.data);
        localStorage.setItem("shopData", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("shopData"));
    if (products) {
      setShopData(products);
    } else {
      getShopData();
    }
  }, []);

  return (
    <div className="sm: mx-20 grid gap-y-6 gap-x-6 place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shopData.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
