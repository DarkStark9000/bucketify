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
    <div className="m-auto w-5/6 flex flex-row gap-10 flex-wrap">
      {shopData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
