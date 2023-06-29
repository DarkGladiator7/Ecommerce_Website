import React from "react";
import ProductsCard from "./ProductsCard";
import { useState, useEffect } from "react";
import FilterComponent from "./FilterComp/FilterComp";
const Products = ({ products }) => {
  const [productss, setProducts] = useState([]);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    if (products && rating > 0) {
      setProducts(products.filter((item) => item.rating === rating));
    } else if (products) {
      setProducts(products);
    } else {
      setProducts([]);
    }
  }, [products, rating]);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <div>
          <FilterComponent setRating={setRating} />
        </div>
      </div>
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

export default Products;
