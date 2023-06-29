import React, { useEffect, useState } from "react";

import Products from "../Products";
import { useLoaderData } from "react-router-dom";
const ProductsPage = () => {
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
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
          Discover Our Exquisite Collection
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore a world of premium products curated just for you
        </p>
      </div>
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
