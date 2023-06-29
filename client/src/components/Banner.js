import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Banner = () => {
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img4.8f7fc6b56e74dba2b6f9.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative ">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400w] h-full flex transition-transform duration-1000 "
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44  ">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <BsChevronLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <p className="max-w-[700px] text-gray-600 pt-2 text-center">
          Discover a world of convenience and endless possibilities at DarkLight
          Shopping. Our online marketplace brings you an immersive shopping
          experience like no other, offering an extensive range of high-quality
          products at your fingertips. From fashion and beauty to home
          essentials and electronics, we strive to provide exceptional customer
          service, secure transactions, and speedy delivery to your doorstep.
          Explore, shop, and elevate your online shopping journey with us today!
        </p>
      </div>
    </div>
  );
};

export default Banner;
