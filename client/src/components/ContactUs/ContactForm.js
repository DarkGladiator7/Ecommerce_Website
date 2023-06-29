import React, { useState } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import "firebase/database";
import { app } from "../../Firebase/firebase.config";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const database = getDatabase(app);
  const contactsRef = ref(database, "contactus");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newContactRef = push(contactsRef);
      await set(newContactRef, {
        name,
        email,
        message,
      });
      console.log(newContactRef);

      // Clear the form after successful submission
      setName("");
      setEmail("");
      setMessage("");
      alert("Thank you for your message!");
    } catch (error) {
      console.error("Error writing data: ", error);
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="flex flex-row items-center relative">
      <h1 className="text-5xl ml-10 font-bold w-[500px] pl-16 absolute overflow-hidden">
        Contact Us
      </h1>
      <div className="container mx-auto px-4 py-8">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
