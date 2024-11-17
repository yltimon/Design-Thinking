import React, { useState } from "react";
import step1 from './photo/step1.png'
import step2 from './photo/step2.png'
import step3 from './photo/step3.png'
import step4 from './photo/step4.png'
import step5 from './photo/step5.png'
import step6 from './photo/step6.png'

// Example data for the slideshow
const slides = [
  {
    image: step1,
    title: "Step 1: Visual Inspection",
    description: "Stand in front of a mirror with your shoulders straight. Look for any changes in shape, size, or skin texture of your breasts.",
  },
  {
    image: step2,
    title: "Step 2: Both Hands on the Hips",
    description: "Notice if one breast appears different from the other.",
  },
  {
    image: step3,
    title: "Step 3: Raise Arms",
    description: "Raise your arms and look for any change",
  },
  {
    image: step4,
    title: "Step 4: Palpation Standing Up",
    description: "Use your right hand to examine your left breast and vice versa. Use a circular motion to check for lumps.",
  },
  {
    image: step5,
    title: "Step 5: Palpation Standing Up",
    description: "Feel your breasts while standing. It's often easiest to feel them when the skin is wet, such as in the shower.",
  },
  {
    image: step6,
    title: "Step 6: Palpation Lying Down",
    description: "Feel your breasts while lying down.",
  },
];

function SelfAssessment () {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto p-6 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-700 mb-2">{slides[currentSlide].description}</p>
        </div>

        <div className="mb-4 size-fit mx-auto">
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            className={`bg-gray-300 py-2 px-4 rounded-lg ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            Previous
          </button>
          <span className="text-gray-600">
            Step {currentSlide + 1} of {slides.length}
          </span>
          <button
            className={`bg-pink-500 text-white py-2 px-4 rounded-lg ${currentSlide === slides.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
