// src/pages/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Why = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate("/assess")
  }
  return (
    <div className="bg-pink-100 min-h-screen py-12 px-4 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-pink-800">Why We're Here</h2>
        <p className="text-lg text-gray-600 mt-4">
          Empowering individuals with knowledge and tools for early detection
          and breast cancer risk assessment.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="bg-pink-700 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-3xl font-bold">1 in 8</h3>
          <p className="text-lg">Women will be diagnosed with breast cancer in their lifetime</p>
        </div>
        <div className="bg-pink-600 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-3xl font-bold">685,000</h3>
          <p className="text-lg">Deaths due to breast cancer globally each year</p>
        </div>
        <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-3xl font-bold">64%</h3>
          <p className="text-lg">Survival rate improves with early detection and screening</p>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-pink-800 mb-4">Our Commitment to Early Detection</h2>
          <p className="text-gray-700 mb-6">
            The Breast Cancer Risk Assessment tool aims to empower individuals with a better understanding of their personal risk factors.
            By providing a comprehensive assessment, we hope to encourage proactive steps towards regular screening and early detection.
            Early detection of breast cancer can save lives, as it allows for more treatment options and better outcomes.
          </p>
          <a onClick={handleSubmit} className="text-pink-700 font-bold hover:underline">
            Start Your Assessment Now &rarr;
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Breast Cancer Awareness"
            className="rounded-lg shadow-lg w-full md:w-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
