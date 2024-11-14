const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai'); 
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 5000;
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// API Route for the Assessment
app.post("/api/assessment", async (req, res) => {
    const formData = req.body;
    // console.log("Request received:", req.body);

    const prompt = `
        Below are breast cancer assessment questions and answers:
        1. Medical history of breast cancer/DCIS/LCIS: ${formData.medicalHistory}
        2. Genetic mutation (BRCA1/BRCA2): ${formData.geneticMutation}
        3. Age: ${formData.age}
        4. Ethnicity: ${formData.ethnicity}
        5. History of breast biopsy with benign diagnosis: ${formData.biopsy}
        6. Age at first menstrual period: ${formData.firstMenstrualAge}
        7. Age at first childbirth: ${formData.firstChildBirthAge}
        8. Number of first-degree relatives with breast cancer: ${formData.relativesWithCancer}

        Generate a detailed, empathetic, informative and user-friendly report based on the assessment. Provide actionable steps based on the answers. Include information about risk factors (age, race, family history, etc.) that might be relevant.
    `; 

    // console.log(prompt);
    try {

        const result = await model.generateContent(prompt);

        console.log("The results directly from the model:", result);

        const responseText = result.response.candidates[0].content.parts[0].text || "Sorry, I couldn't generate a response.";
        console.log('The responseText is:', responseText)
        res.status(200).json({
            success: true,
            response: responseText,
        })
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({
            success: false,
            message: "Failed to generate the response. Please try again later.",
        });
    }
});





app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


