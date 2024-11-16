// src/components/GetStarted.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = ({ onClose }) => {
  const navigate = useNavigate();
  const userSignUp = () => {
    navigate("/signup")
  }

  const userLogin = () => {
    navigate("/login")
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4 text-green-600">
          Not yet registered?
        </h2>
        <p className="mb-6 text-gray-600">
          To enjoy the full benefits of our website, you need to register first.
        </p>
        <button
          className="w-full bg-green-500 text-white py-2 mb-2 rounded-lg hover:bg-green-600"
          onClick={userSignUp}
        >
          Sign Up ➤
        </button>
        <button
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
          onClick={userLogin}
        >
          Login ➤
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
