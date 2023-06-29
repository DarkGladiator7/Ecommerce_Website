import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductsSimple from "../components/ProductsSimple";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const productList = Object.keys(data.data).map((productId) => ({
      id: productId,
      ...data.data[productId],
    }));
    setProducts(productList.slice(0,4));
  }, [data]);
  console.log(products);

  return (
    <div>
      <Banner />
      <div>
        <ProductsSimple products={products} />
      </div>
    </div>
  );
};

export default Home;
