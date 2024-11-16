import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AssessmentForm from "./components/Assessment";
import ResultsPage from "./components/ResultsPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Resources from "./components/Resources";
import Login from "./components/GetStated/Login";
import SignUp from "./components/GetStated/SignUp";
import Why from "./components/Why";
import SelfAssessment from "./components/SelfAssess";
import CommunityPage from "./components/CommunityPage";
import Wall from "./components/Wall";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assess" element={<AssessmentForm />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<Why />} />
        <Route path="/selfassess" element={<SelfAssessment />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/wall" element={<Wall />} />
      </Routes>
    </Router>
  );
}

export default App;
