// const express = require("express");
// const app = express();

// const cors = require("cors");
// const PORT = process.env.PORT || 8080;

// const admin = require("firebase-admin");

// // Initialize Firebase Admin SDK
// const serviceAccount = require("./path/to/serviceAccountKey.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://darklightindustries-966ec-default-rtdb.firebaseio.com",
// });

// app.use(express.json());

// app.post(
//   "https://darklightindustries-966ec-default-rtdb.firebaseio.com//products",
//   (req, res) => {
//     // Here, you can store the product details in Firebase
//     const {
//       _id,
//       category,
//       description,
//       image,
//       isNew,
//       oldPrice,
//       price,
//       rating,
//       title,
//     } = req.body;

//     // Firebase logic here
//     const productRef = admin.database().ref("products/");
//     const newProductRef = productRef;
//     newProductRef.set({
//       _id,
//       category,
//       description,
//       image,
//       isNew,
//       oldPrice,
//       price,
//       rating,
//       title,
//     });

//     // Return a response with the newly added product
//     res.json({ message: "Product added successfully!", product: req.body });
//   }
// );

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
