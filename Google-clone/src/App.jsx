import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchSection from "./components/SearchSection/SearchSection";
import Listening from "./components/Listening/Listening";
import "./App.css";
import ResultPage from "./components/ResultPage/ResultPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SearchSection />} />
          <Route path="/speak" element={<Listening />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
