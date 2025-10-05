import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoComp from "./components/VideoComp"
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
