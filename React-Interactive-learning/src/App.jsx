// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Homepage/Layout";
import Dashboard from "./components/Dashboard/dashboard";
import Chapter1 from "./components/Dashboard/chapter1";
import Chapter2 from "./components/Dashboard/chapter2";
import Chapter3 from "./components/Dashboard/chapter3";
import Chapter4 from "./components/Dashboard/chapter4";
import Chapter5 from "./components/Dashboard/chapter5";
import Chapter10 from "./components/Dashboard/chapter10";
import Chapter9 from "./components/Dashboard/chapter9";
import Chapter8 from "./components/Dashboard/chapter8";
import Chapter7 from "./components/Dashboard/chapter7";
import Chapter6 from "./components/Dashboard/chapter6";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Layout />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route path="/chapter5" element={<Chapter5 />} />
        <Route path="/chapter6" element={<Chapter6 />} />
        <Route path="/chapter7" element={<Chapter7 />} />
        <Route path="/chapter8" element={<Chapter8 />} />
        <Route path="/chapter9" element={<Chapter9 />} />
        <Route path="/chapter10" element={<Chapter10 />} />
      </Routes>
    </Router>
  );
}

export default App;
