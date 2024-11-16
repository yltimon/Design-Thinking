// src/components/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
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
          <button className="w-full bg-pink-500 text-white py-2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
