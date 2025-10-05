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
import { Separator } from "../ui/separator";
import Greeting from "@/lib/greetings";
import NextChapterButton from "@/lib/Nextbutton";

// Starter code for Chapter 4
const starterCode = `
import React, { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Event Handling Example</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
    </div>
  );
}
`;

export default function Chapter4() {
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
        message="You successfully completed the Event Handling challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 4: Handling Events
          </CardTitle>
          <CardDescription className="text-gray-300 text-base leading-relaxed mt-2">
            In React, events let your app respond to user actions, such as clicks, 
            typing, or form submissions. Event handlers are functions you define 
            and attach to JSX elements via props like <code>onClick</code>, 
            <code>onChange</code>, <code>onSubmit</code>, etc. 
            <br /><br />
            React normalizes events across browsers and allows you to control 
            your UI based on user interactions. Understanding event handling 
            is crucial for making interactive applications.
          </CardDescription>

          {/* Challenge Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">
              🧠 Challenge:
            </h2>
            <p className="mt-2">
              Extend the app to include an <code>input</code> field where the user can 
              type a name, and when they click the button, display 
              "Hello, [name]!" instead of the static message.  
              <br />
              Hint: Use <code>onChange</code> to capture input and <code>useState</code> 
              to store it.
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
        nextChapter="/chapter5"
      />
    </div>
  );
}
