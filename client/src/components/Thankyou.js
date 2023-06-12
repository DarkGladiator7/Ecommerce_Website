import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { logow } from "../assests";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <img src={logow} alt="DarkLight Shopping" className="h-20 mb-8" />
      <div className="text-gray-400 text-xl ">
        Thank you for shopping from DarkLight Shopping. Have a good day :)
      </div>
      <div className="text-gray-400 text-xl mb-8">
        Shipment will be delivered shortly.
      </div>
      <div className="text-gray-200 text-2xl mb-8 ml-1 animate-pulse">
        Redirecting back to HomePage...
      </div>
      <div className="flex flex-row items-center gap-7">
        <div className="animate-pulse text-white text-4xl">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className="animate-pulse text-white text-4xl ">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className="animate-pulse text-white text-4xl ">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
