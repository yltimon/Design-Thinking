// src/pages/GeneticScreeningPage.jsx
import React from "react";

const GeneticScreeningPage = () => {
  return (
    <div className="p-6 bg-pink-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Genetic Screening & Breast Screening
        </h1>
        <p className="text-gray-600 text-lg">
          Learn the importance of Genetic Screening and Breast Screening. Understand their purposes, benefits, and how they can help in early detection and prevention of breast cancer.
        </p>
      </div>

      {/* Comparison Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Genetic Screening Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Genetic Screening</h2>
          <p className="text-gray-700 mb-4">
            Genetic screening analyzes your DNA to look for specific inherited mutations that may increase your risk of breast cancer. 
            It is usually recommended for individuals with a family history of cancer, or an unknown or limited family history.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Analyzes genetic mutations (e.g., BRCA1, BRCA2)</li>
            <li>Helps assess hereditary risk of breast cancer</li>
            <li>Requires a blood or saliva sample</li>
            <li>Recommended for those with family history of cancer</li>
          </ul>
          <p className="text-sm text-blue-500 font-semibold">Best for: Assessing hereditary risk and understanding genetic predisposition.</p>
        </div>

        {/* Breast Screening Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-pink-200">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Breast Screening</h2>
          <p className="text-gray-700 mb-4">
            Breast screening involves imaging tests like mammograms and ultrasounds to detect early signs of breast cancer. It helps identify abnormalities before symptoms appear.
            Regular screenings are recommended for women above 40 or those with increased risk factors. For women at high risk, annual screening may be started at an earlier age.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Involves mammograms, ultrasounds, or MRIs</li>
            <li>Detects early signs of breast abnormalities</li>
            <li>Non-invasive imaging tests</li>
            <li>Recommended as a routine check-up for women aged 40+</li>
          </ul>
          <p className="text-sm text-pink-500 font-semibold">Best for: Early detection of breast cancer and monitoring breast health.</p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-10 w-full max-w-3xl text-center">
        <p className="text-gray-700 mb-4">
          Both genetic and breast screenings are crucial tools in early detection and prevention of breast cancer. Consult with your healthcare provider to determine which option is best suited for you.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default GeneticScreeningPage;
