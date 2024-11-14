import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssessmentForm from "./components/Assessment";
import ResultsPage from "./components/ResultsPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assess" element={<AssessmentForm />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
