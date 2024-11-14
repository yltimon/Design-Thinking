import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AssessmentForm() {
    const [formData, setFormData] = useState({
        medicalHistory: "",
        geneticMutation: "",
        age: "",
        ethnicity: "",
        biopsy: "",
        firstMenstrualAge: "",
        firstChildBirthAge: "",
        relativesWithCancer: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/assessment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            console.log(formData);
            const data = await response.json();
            console.log("Data received from API:", data);

            if (data.success) {
                navigate("/results", { state: { result: data.response } });
              } else {
                alert("Failed to generate the assessment. Please try again.");
              }

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Breast Cancer Risk Assessment</h1>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-3/4 md:w-1/2 lg:w-1/3">
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="history">Medical History</label>
              <select
                name="medicalHistory"
                id="history"
                onChange={handleChange}
                value={formData.medicalHistory}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="genetic">Genetic Mutation (BRCA1/BRCA2)</label>
              <select
                id="genetic"
                name="geneticMutation"
                onChange={handleChange}
                value={formData.geneticMutation}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                onChange={handleChange}
                value={formData.age}
                className="w-full p-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="ethnic">Ethnicity</label>
              <input
                type="text"
                id="ethnic"
                name="ethnicity"
                onChange={handleChange}
                value={formData.ethnicity}
                className="w-full p-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="biopsy">Breast Biopsy History</label>
              <select
                name="biopsy"
                id="biopsy"
                onChange={handleChange}
                value={formData.biopsy}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="firstmenst">Age at First Menstrual Period</label>
              <input
                type="number"
                id="firstmenst"
                name="firstMenstrualAge"
                onChange={handleChange}
                value={formData.firstMenstrualAge}
                className="w-full p-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="firstchild">Age at First Childbirth</label>
              <input
                type="text"
                id="firstchild"
                name="firstChildBirthAge"
                onChange={handleChange}
                value={formData.firstChildBirthAge}
                className="w-full p-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block font-semibold mb-2" for="relatives">Number of First-Degree Relatives with Breast Cancer</label>
              <input
                type="text"
                id="relatives"
                name="relativesWithCancer"
                onChange={handleChange}
                value={formData.relativesWithCancer}
                className="w-full p-2 border rounded"
                required
              />
            </div>
    
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      );
    
}
export default AssessmentForm