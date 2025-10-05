"use client";
import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

import SandpackEditor from "./Sandbox";
import { Separator } from "../ui/separator";
import Greeting from "@/lib/greetings";
import NextChapterButton from "@/lib/Nextbutton";

// Starter code for Chapter 2
const starterCode = `
import React from "react";

// A simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// The main App component rendering Welcome
export default function App() {
  return (
    <div>
      <Welcome name="React Learner" />
      <p>Try changing the name prop to your own!</p>
    </div>
  );
}
`;

export default function Chapter2() {
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
        message="You successfully completed the Components challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 2: Components
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            Components are the building blocks of any React app. They let you
            split the UI into reusable pieces. Functional components receive
            <code>props</code> as input and return JSX to render UI elements.
          </CardDescription>

          {/* Challenge Section */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-fuchsia-600">
              🧠 Challenge:
            </h2>
            <p className="mt-2">
              Change the <code>name</code> prop in the <code>{"<Welcome />"}</code>{" "}
              component to display your own name!
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

      <Separator className="my-4 border-gray-700" />

      {/* Sandpack Editor */}
      <Card className="shadow-lg bg-black text-white border border-fuchsia-900">
        <CardContent className="p-0">
          <SandpackEditor code={starterCode} />
        </CardContent>
      </Card>

      {/* Next Chapter Button */}
      <NextChapterButton
        challengeCompleted={challengeCompleted}
        nextChapter="/chapter3"
      />
    </div>
  );
}
