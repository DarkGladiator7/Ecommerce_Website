import React from "react";
import ProductsCard from "./ProductsCard";
import { useState, useEffect } from "react";
import FilterComponent from "./FilterComp/FilterComp";
const Products = ({ products }) => {
  const [productss, setProducts] = useState([]);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    if (products && rating > 0) {
      const productList = Object.keys(products)
        .map((productId) => ({
          id: productId,
          ...products[productId],
        }))
        .filter((item) => item.rating === rating);
      setProducts(productList);
    } else if (products) {
      const productList = Object.keys(products).map((productId) => ({
        id: productId,
        ...products[productId],
      }));
      setProducts(productList);
    } else {
      setProducts([]);
    }
  }, [products, rating]);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <p className="max-w-[700px] text-gray-600 text-center">
          Discover a world of convenience and endless possibilities at DarkLight
          Shopping. Our online marketplace brings you an immersive shopping
          experience like no other, offering an extensive range of high-quality
          products at your fingertips. From fashion and beauty to home
          essentials and electronics, we strive to provide exceptional customer
          service, secure transactions, and speedy delivery to your doorstep.
          Explore, shop, and elevate your online shopping journey with us today!
        </p>
        <div>
          <FilterComponent setRating={setRating} />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10 ">
        {productss.map((item) => {
          return <ProductsCard key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
