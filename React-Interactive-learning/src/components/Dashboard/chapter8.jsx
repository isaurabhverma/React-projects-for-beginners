"use client";
import React, { useState } from "react";
import SandpackEditor from "./Sandbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Greeting from "@/lib/greetings";
import NextChapterButton from "@/lib/Nextbutton";
import { Button } from "../ui/button";

const starterCode = `
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
`;

export default function Chapter8() {
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChallengeComplete = () => {
    setChallengeCompleted(true);
    setShowPopup(true);
  };

  return (
    <div className="max-w-full bg-black mx-auto p-6 space-y-6 text-white relative">
      {/* Greeting Popup */}
      <Greeting
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message="You successfully completed the routing challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 8: React Router & Navigation
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            React Router allows you to create client-side routes in your React applications.
            It enables navigation between different components and pages without refreshing the browser.
          </CardDescription>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">
              🧠 Challenge:
            </h2>
            <p className="mt-2">
              Add a new route "/contact" with a Contact component displaying "Contact Us" and link to it in the navigation.
            </p>
            <Button
              className={`mt-3 ${challengeCompleted ? "bg-green-600" : "bg-fuchsia-800"} text-white`}
              onClick={handleChallengeComplete}
            >
              {challengeCompleted
                ? "Challenge Completed ✅"
                : "Mark Challenge Complete"}
            </Button>
          </div>
        </CardHeader>
      </Card>


      {/* Sandpack Editor */}
      <Card className="shadow-lg bg-black text-white border border-fuchsia-900">
        <CardContent className="p-0">
          <SandpackEditor code={starterCode} />
        </CardContent>
      </Card>

      {/* Next Chapter Button */}
      <NextChapterButton challengeCompleted={challengeCompleted} nextChapter="/chapter9" />
    </div>
  );
}
