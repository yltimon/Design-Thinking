import { useNavigate } from "react-router-dom";
import Why from "./Why";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/assess")
  }
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
          <button onClick={handleSubmit} className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-700">
          Get Started
          </button>
        </div>
      </div>
      <Why />
    </>
    
  
  );
};

export default HomePage;
