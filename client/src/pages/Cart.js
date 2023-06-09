import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartbg, userLogo } from "../assests";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  const payment = async (token) => {
    await axios.post("http.//localhost:8080/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };
  useEffect(() => {
    let price = 0;

    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to CheckOut");
    }
  };
  return (
    <div>
      <img className="w-full h-60 object-cover" src={cartbg} alt="cartbg" />
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
              <span>John Doe, 1234 Test Street Cityville, State Country</span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to Checkout
          </button>
          {payNow && (
            <div>
              <StripeCheckout
                stripeKey="pk_test_51NGgvBSFXWj4YAa54KkjqCWEpxxLqHuu2WMrHVUGHsLD1zqbOvtjsSRpStIoUKwmsU7IcirYVzvwYWcdJMMYLGVW00LJGnpMD1"
                name="DarkLight Online Shopping"
                amount={totalAmt * 100}
                label="Pay to DarkLight"
                description={`Your Payment amount is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
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
