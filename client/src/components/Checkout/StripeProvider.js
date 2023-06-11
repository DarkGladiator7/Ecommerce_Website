import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51NGgvBSFXWj4YAa54KkjqCWEpxxLqHuu2WMrHVUGHsLD1zqbOvtjsSRpStIoUKwmsU7IcirYVzvwYWcdJMMYLGVW00LJGnpMD1"
);

const StripeProvider = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Payment Checkout</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default StripeProvider;
