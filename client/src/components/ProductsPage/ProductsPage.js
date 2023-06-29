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
    <div>
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
