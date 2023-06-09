const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
});

console.log("hello");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
