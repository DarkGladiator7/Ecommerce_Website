import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const productList = Object.keys(data.data).map((productId) => ({
      id: productId,
      ...data.data[productId],
    }));
    setProducts(productList);
  }, [data]);
  console.log(products);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
