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
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Controlled Form Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Hello, {submittedName}!</p>}
    </div>
  );
}
`;

export default function Chapter7() {
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
        message="You successfully completed the forms challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 7: Forms & Controlled Components
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            Learn how to create forms in React using controlled components. Controlled components let React manage form inputs via state, giving you full control over the form data and user interactions.
          </CardDescription>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">
              🧠 Challenge:
            </h2>
            <p className="mt-2">
              Add an email input to the form and display a message "Welcome, [name]! Your email is [email]" when submitted.
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
      <NextChapterButton challengeCompleted={challengeCompleted} nextChapter="/chapter8" />
    </div>
  );
}
