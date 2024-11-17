import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { marked } from 'marked';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location state:", location.state);
  const result = location.state?.result || "No assessment was made.";

  const htmlContent = marked(result);

  return (
    <div className="flex flex-col items-center justify-center h-3/4 bg-pink-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full h-fit md:w-3/4 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center">Assessment Report</h1>
        <div className="text-gray-700 mb-6">
          <p className="mb-4">
            <span className="font-bold">Disclaimer: </span>
             This assessment is based on the information you provided and is not a substitute for professional medical advice. Please consult your healthcare provider for a comprehensive evaluation.
          </p>
          <div 
            className="p-4 bg-gray-50 border rounded"
            dangerouslySetInnerHTML={ {__html: htmlContent }}
            >
            
          </div>
        </div>
        <button
          className="w-full p-2 bg-pink-600 text-white rounded hover:bg-pink-700"
          onClick={() => navigate("/")}
        >
          Continue with Onboarding
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
