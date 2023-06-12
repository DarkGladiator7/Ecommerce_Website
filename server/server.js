const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.options("*", cors());

const stripe = require("stripe")(
  "sk_test_51NGgvBSFXWj4YAa5qv5f6kKKqUsNU8YzY3L0EAjESc2HWhUr8doQvLVXygMsq4mZycvOr5mquatmLyb0goJtb95v0068Vwbn1n"
);

app.get("/", (req, res) => {
  const response = {
    message: "Hello, world!",
  };

  res.json(response);
});

app.post(
  "/create-payment-intent",

  async (req, res) => {
    const { amount } = req.body;
    console.log(amount);
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "inr", // Replace with your desired currency
      });
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
