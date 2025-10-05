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


const starterCode = `
import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>useEffect & Lifecycle</h1>
      <p>Current time: {time.toLocaleTimeString()}</p>
    </div>
  );
}
`;

export default function Chapter6() {
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
        message="You successfully completed the useEffect challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 6: useEffect & Lifecycle
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            The <code>useEffect</code> hook lets you perform side effects in functional components. It's similar to lifecycle methods in class components. Use it to fetch data, subscribe to events, or manipulate the DOM.
          </CardDescription>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">🧠 Challenge:</h2>
            <p className="mt-2">
              Modify the timer so it shows the current date and updates every second. Bonus: format it as "Day, Month Date, Year - HH:MM:SS".
            </p>
            <button
              className={`mt-3 px-4 py-2 rounded ${
                challengeCompleted ? "bg-green-600" : "bg-fuchsia-800"
              } text-white`}
              onClick={handleChallengeComplete}
            >
              {challengeCompleted
                ? "Challenge Completed ✅"
                : "Mark Challenge Complete"}
            </button>
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
      <NextChapterButton challengeCompleted={challengeCompleted} nextChapter="/chapter7" />
    </div>
  );
}
