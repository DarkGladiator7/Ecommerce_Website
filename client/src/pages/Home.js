import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductsSimple from "../components/ProductsSimple";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const productList = Object.keys(data.data).map((productId) => ({
      id: productId,
      ...data.data[productId],
    }));
    setProducts(productList.slice(0, 4));
  }, [data]);
  console.log(products);

  return (
    <div>
      <Banner />
      <div>
        <ProductsSimple products={products} />
      </div>
      <div className="flex justify-center pb-10 relative bottom-4">
        <Link
          to="/products"
          className="inline-flex items-center py-3 px-8 bg-gray-400 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:text-white transition duration-300"
        >
          <span className="mr-2">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </span>
          Shop All
        </Link>
      </div>
    </div>
  );
};

export default Home;
