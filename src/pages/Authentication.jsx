import React, { useEffect, useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase-config";

const Authentication = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="authentication-page">
      <div className="google-auth-container">
        <button className="google-auth-button" onClick={handleGoogleLogin}>
          <FcGoogle className="google-logo" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Authentication;
