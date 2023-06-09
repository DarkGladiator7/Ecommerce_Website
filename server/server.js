const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.options('*', cors());
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("hello world!");
});

// app.post("/pay", async (req, res) => {
//   res.send(req.body.token);
//   await Stripe.charges.create({
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: "usd",
//   });
// }); 

app.post('/pay', async (req, res) => {
  try {
    // Process the payment using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Replace with the actual amount to charge
      currency: 'usd', // Replace with the actual currency
      payment_method: req.body.paymentMethod.id,
      confirm: true,
    });

    // Return a success response
    res.json({ success: true, paymentIntent });
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: error.message });
  }
});

console.log("hello");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
