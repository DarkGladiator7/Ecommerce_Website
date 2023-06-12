import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage("Error: Stripe.js has not loaded.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/create-payment-intent",
        {
          amount: 1000,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { clientSecret } = response.data;
      // Use the clientSecret to proceed with the payment
      console.log("Payment successful!", clientSecret);
      
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const stripePromise = loadStripe(
    "pk_test_51NGgvBSFXWj4YAa54KkjqCWEpxxLqHuu2WMrHVUGHsLD1zqbOvtjsSRpStIoUKwmsU7IcirYVzvwYWcdJMMYLGVW00LJGnpMD1"
  );

  return (
    <div>
      <h1>Stripe Checkout</h1>
      <Elements stripe={stripePromise}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="card-element"
              className="block mb-2 font-medium text-gray-700"
            >
              Card Details
            </label>
            <CardElement
              id="card-element"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            disabled={!stripe || isLoading}
            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md disabled:bg-gray-400"
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </Elements>
    </div>
  );
};

export default CheckoutForm;
