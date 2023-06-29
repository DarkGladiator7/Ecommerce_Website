import React from "react";
import { logow, paymentLogo } from "../assests";
import { ImGithub } from "react-icons/im";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
const Footer = () => {
  return (
    //left side bottom
    <div className="bg-black text-[#949494] py-20 font-titleFont ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-4">
          <img className="pl-2 w-32 " src={logow} alt="logow" />
          <p className="text-white pl-2 text-sm tracking-wide ">
            @ DarkLight.com
          </p>
          <img className="w-56 h-auto " src={paymentLogo} alt="paymentlogo" />
          <div className=" pl-2 flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">locate us</h2>
          <div className="text-base flex flex-col gap-1 ">
            <p>Chennai, India</p>
            <p>Mobile: 9788823456</p>
            <p>Phone:044-43327986</p>
            <p>e-mail: DarkLightStudios@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black  ">
            Subscribe for newsletters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
