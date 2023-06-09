import React, { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/pay", {
        // Add your payment data here
      });

      setPaymentSuccess(true);
      setPaymentError(null);
      console.log(response.data); // Process the response from the server
    } catch (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label
          className="block mb-2 text-lg font-medium"
          htmlFor="card-details"
        >
          Card details
        </label>
        <CardElement
          options={{ style: { base: { fontSize: "16px" } } }}
          className="border p-2"
        />
      </div>
      {paymentError && <div className="text-red-500 mb-4">{paymentError}</div>}
      {paymentSuccess && (
        <div className="text-green-500 mb-4">Payment successful!</div>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
