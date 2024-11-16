// src/components/SignUp.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();

    const handleOnBoarding = () =>{
        navigate("/assess")
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <button onClick={handleOnBoarding} className="w-full bg-green-500 text-white py-2 rounded-lg">
            Sign Up
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default SignUp;
