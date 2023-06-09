import React, { useEffect, useState } from "react";
import { githubLogo, googleLogo } from "../assests";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, loginFromCart, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [cartl, setcart] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const lFcart = useSelector((state) => state.bazar.loginFromCart);
  console.log(lFcart);

  // const handlesetCart = () => {
  //   dispatch(loginFromCart(false));
  // };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    console.log(auth);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          console.log(lFcart);
          if (lFcart) {
            navigate("/cart");
          } else {
            navigate("/");
          }
        }, 1500);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

  const handleSignOut = () => {
    console.log(auth);
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
        dispatch(loginFromCart(false));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(loginFromCart());
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-7 py-20">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-bold text-black mb-8">Login</h1>
      </div>

      <div className="w-full flex items-center justify-center pr-7 gap-7">
        <img className="w-36" src={googleLogo} alt="altlogo" />

        <div
          onClick={handleGoogleLogin}
          className="text-base pr-7 w-56 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center  hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-12" src={googleLogo} alt="altlogo" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>

        <button
          onClick={handleSignOut}
          className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-7 pr-48">
        <img className="w-36" src={githubLogo} alt="git" />
        <div
          onClick={() => toast.success("Still under development")}
          className="text-base pr-4 w-56 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center  hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-12" src={githubLogo} alt="git" />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        {/* <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button> */}
      </div>
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

export default Login;
