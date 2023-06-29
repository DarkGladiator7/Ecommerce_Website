import React from "react";
import ProductsCard from "./ProductsCard";
import { useState, useEffect } from "react";
import FilterComponent from "./FilterComp/FilterComp";
const ProductsSimple = ({ products }) => {
  const [productss, setProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setProducts(products);
    } else {
      setProducts([]);
    }
  }, [products]);
  return (
    <div className="py-2 ">
      {productss.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 ">
          {productss.map((item) => {
            return <ProductsCard key={item._id} product={item} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center py-10">
          <h2 class="text-3xl font-bold text-center text-gray-800 mt-8 animate-bounce ">
            No Products Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default ProductsSimple;
