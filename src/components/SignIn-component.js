import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();

  const signInHandler = async () => {
    const result = await signInWithPopup(auth, provide);
    console.log(result);
    navigate("/collection");
  };

  return (
    <div className="SignIn">
      <button onClick={signInHandler}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
