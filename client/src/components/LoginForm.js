import React, { useState } from "react";

import "firebase/auth";
import { getDatabase, ref, push, set, get } from "firebase/database";
import axios from "axios";
import { app } from "../Firebase/firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const database = getDatabase(app);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const instance = axios.create({
        baseURL:
          "https://darklightindustries-966ec-default-rtdb.firebaseio.com/",
      });
      const response = await instance.get("./users.json");
      const users = response.data;
      console.log(users);
      let foundUser = null;
      if (users) {
        Object.keys(users).forEach((userId) => {
          if (users[userId].email === email) {
            foundUser = users[userId];
          }
        });
      }

      if (foundUser) {
        if (foundUser.password === password) {
          console.log("Logged in successfully!");
        } else {
          console.error("Incorrect password");
        }
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const db = getDatabase();
      const usersRef = ref(db, "users");
      const newUserRef = push(usersRef);
      await set(newUserRef, {
        email,
        password,
      });

      console.log("Signed up successfully!");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col items-center  mt-10 w-[400px] bg-gray-100">
      <div className="bg-white shadow-md rounded w-[400px] px-8 py-6">
        <h2 className="text-5xl mb-4 ml-24 pl-1 font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="block border border-gray-300 rounded w-full p-2 mb-4"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="block border border-gray-300 rounded w-full p-2 mb-4"
            />
            <span
              className="absolute right-2 top-2 cursor-pointer text-gray-500"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 ml-32 rounded"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleSignup}
          className="mt-4 text-sm text-gray-600 underline ml-32 pl-3 cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
