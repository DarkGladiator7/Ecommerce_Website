import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartbg } from "../assests";
import CartItem from "../components/CartItem";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { loginFromCart } from "../redux/bazarSlice";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);
  const lFcart = useSelector((state) => state.bazar.loginFromCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (lFcart) {
      dispatch(loginFromCart(false));
      setPayNow(true);
      return;
    }
  }, [lFcart]);

  useEffect(() => {
    if (userInfo) {
      setPayNow(true);
      return;
    }
  }, [userInfo]);

  useEffect(() => {
    let price = 0;

    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  console.log(productData);
  return (
    <div>
      <img className="w-full h-60 object-cover" src={cartbg} alt="cartbg" />
      {productData.length > 0 ? (
        <div>
          {" "}
          <div className="max-w-screen-xl mx-auto py-20 flex">
            <CartItem />

            <div className="w-1/3 h-2/3 flex-none bg-[#fafafa]  py-6 px-4 ">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">Cart Totals</h2>
                <p className="flex items-center gap-4 text-base">
                  Subtotal{" "}
                  <span className="font-titleFont font-bold text-lg">
                    $ {totalAmt}
                  </span>
                </p>
                <p className="flex items-start gap-4 text-base">
                  Shipping{" "}
                  <span>
                    John Doe, 1234 Test Street Cityville, State Country
                  </span>
                </p>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total <span className="text-xl font-bold">$ {totalAmt}</span>
              </p>

              {payNow ? (
                <Link to="/checkout">
                  <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    onClick={() => dispatch(loginFromCart(true))}
                    className="text-base  bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 "
                  >
                    Sign in to Checkout
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 ">
          <p className="  text-4xl text-red-600 font-bold w-50 mt-8 mb-8 py-1 px-6 ">
            Your Cart is Empty
          </p>
          <Link to="/products">
            <button className="bg-teal-500 hover:bg-teal-600 mb-20 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
              Click here to add products
            </button>
          </Link>
        </div>
      )}

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
