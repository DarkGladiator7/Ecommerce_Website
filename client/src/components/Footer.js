import React from "react";
import { logow, paymentLogo } from "../assests";
import { ImGithub } from "react-icons/im";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    //left side bottom
    <div className="bg-black text-[#949494] py-20 font-titleFont ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6">
          <img className="pl-2 w-32 " src={logow} alt="logow" />
          <p className="text-white pl-2 text-sm tracking-wide ">
            @ DarkLight.com
          </p>
          <img className="w-56 h-auto " src={paymentLogo} alt="paymentlogo" />
        </div>
        <div className=" pl-2 flex gap-5 text-lg text-gray-400">
          <ImGithub className="hover:text-white duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
        </div>
        {/*locate us*/}
        <h2 className="text-2xl font-semibold text-white mb-4 ">locate us</h2>
      </div>
    </div>
  );
};

export default Footer;
