import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Products() {
  const [shopData, setShopData] = useState([]);

  const getShopData = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setShopData(response.data);
        // localStorage.setItem("shopData", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getShopData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-x-1 gap-y-4 place-content-center">
      {shopData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
