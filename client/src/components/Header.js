import React from "react";
import { cartImg, logo, userLogo } from "../assests";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const productData = useSelector((state) => state.bazar.productData);

  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className=" cursor-pointer">
            <img className="w-60" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Home
              </li>
            </Link>
            <Link to="/addprod">
              <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Admin Testing
              </li>
            </Link>
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Shop
            </li>
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Element
            </li>
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className=" w-8 h-8" src={cartImg} alt="cart" />
              <span className=" absolute w-8 h-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : userLogo}
              alt="userLogo"
            />
          </Link>
          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
