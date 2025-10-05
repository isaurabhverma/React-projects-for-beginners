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

// Starter code for Chapter 3
const starterCode = `
import React, { useState } from "react";

export default function App() {
  // useState lets you manage data inside a component
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Counter App</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
`;

export default function Chapter3() {
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
        message="You successfully completed the Props & State challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 3: Props & State
          </CardTitle>
          <CardDescription className="text-gray-300 text-base leading-relaxed mt-2">
            In React, <span className="text-fuchsia-500 font-semibold">props</span> 
            (short for properties) are used to pass data from one component to another — 
            like giving input to a function. They make components reusable by changing how 
            they behave through data you send.
            <br /><br />
            On the other hand, <span className="text-fuchsia-500 font-semibold">state</span> 
            is used to store information that changes over time — like a counter value, 
            toggle state, or form input. React automatically re-renders your component 
            whenever its state changes, keeping your UI in sync.
            <br /><br />
            In this chapter, you’ll learn how to create **interactive** components 
            using <code>useState()</code> and explore how state and props help you 
            build dynamic UIs.
          </CardDescription>

          {/* Challenge Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">
              🧠 Challenge:
            </h2>
            <p className="mt-2">
              Modify this app to add a <code>Reset</code> button that sets the counter 
              back to <strong>0</strong>.  
              <br />
              Hint: Use <code>setCount(0)</code> when that button is clicked.
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
        nextChapter="/chapter4"
      />
    </div>
  );
}
