import Why from "./Why";
import GetStarted from "./GetStated/GetStarted";
import React, { useState } from "react";

const HomePage = () => {

  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleGetStarted = () => {
    setShowGetStarted(true);
  };

  const handleCloseModal = () => {
    setShowGetStarted(false);
  };


  return (
    <>
      <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto text-center p-8">
          <h1 className="text-5xl font-extrabold text-pink-700 mb-6">
            Welcome to the Breast Cancer Risk Assessment Tool
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Empower yourself with knowledge and take a proactive approach to your breast health. 
            Our assessment tool provides a personalized evaluation based on your input. Start your journey today.
          </p>
          <button onClick={handleGetStarted} className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-700">
          Get Started
          </button>
          
        </div>
        {showGetStarted && <GetStarted onClose={handleCloseModal} />}
      </div>
      <section id="about"><Why /></section>
      
    </>
    
  
  );
};

export default HomePage;
