import React, { useEffect, useState } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFysYzVVhoapYQ2Tnx0-1v8-aboJ2W2ig",
  authDomain: "darklightindustries-966ec.firebaseapp.com",
  databaseURL: "https://darklightindustries-966ec-default-rtdb.firebaseio.com",
  projectId: "darklightindustries-966ec",
  storageBucket: "darklightindustries-966ec.appspot.com",
  messagingSenderId: "650753109080",
  appId: "1:650753109080:web:8b39c11c78465457f42e2d",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const productsRef = ref(database, "products");

const generateProductId = () => {
  const prefix = "PROD"; // You can customize the prefix
  const timestamp = Date.now().toString(36); // Convert the current timestamp to base36 string

  return prefix + timestamp;
};

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [oldPrice, setoldPrice] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [isNew, setIsNew] = useState("");
  const [_id, setId] = useState("");

  const handleGenerateId = () => {
    const newProductId = generateProductId();

    setId(newProductId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(_id);

    try {
      const newProductRef = push(productsRef);
      await set(newProductRef, {
        _id,
        category,
        description,
        image,
        isNew,
        oldPrice,
        price,
        rating,
        title,
      });

      console.log("Product added successfully!"); // Assuming the response contains the newly added product
      toast.success(`Added ${title} to our products`);
      // Reset form fields
      setoldPrice("");
      setDescription("");
      setPrice(0);
      setCategory("");
      setId("");
      setImage("");
      setIsNew("");
      setRating("");
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleGenerateId();
  }, [handleSubmit]);

  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 pl-7">Add Product</h2>
        <div>
          <label htmlFor="title" className="block mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-400 rounded p-2 mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="category" className="block mb-2">
            Category:
          </label>
          <input
            type="text"
            id="category"
            className="border border-gray-400 rounded p-2 mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <input
            type="text"
            id="description"
            className="border border-gray-400 rounded p-2 mb-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="oldprice" className="block mb-2">
            OldPrice:
          </label>
          <input
            type="number"
            id="oldprice"
            min="0"
            className="border border-gray-400 rounded p-2 mb-4"
            value={oldPrice}
            onChange={(e) => setoldPrice(e.target.value)}
          />
          <label htmlFor="price" className="block mb-2">
            NewPrice:
          </label>
          <input
            type="number"
            id="price"
            min="0"
            className="border border-gray-400 rounded p-2 mb-4"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="flex flex-col items-center">
            <label htmlFor="rating" className="block mb-2">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              min="0"
              max="5"
              className="border border-gray-400 rounded p-2  mb-4"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <label htmlFor="image" className="block mb-2">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            className="border border-gray-400 rounded p-2 mb-4"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="isNew" className="block mb-2">
            New/Old Product
          </label>
          <input
            type="text"
            id="newold"
            className="border border-gray-400 rounded p-2 mb-4"
            value={isNew}
            onChange={(e) => setIsNew(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 duration-300"
        >
          Add Product
        </button>
      </form>
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

export default AddProduct;
