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

const starterCode = `
import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Conditional Rendering & Lists</h1>
      
      {isLoggedIn ? <p>Welcome back, user!</p> : <p>Please log in!</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <h2>Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
`;

export default function Chapter5() {
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
        message="You successfully completed the Conditional Rendering & Lists challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 5: Conditional Rendering & Lists
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            Learn how to render content conditionally based on state and how to render arrays using the <code>map</code> function. Conditional rendering is essential to display UI based on user actions, and lists allow dynamic rendering of multiple elements.
          </CardDescription>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">🧠 Challenge:</h2>
            <p className="mt-2">
              Add a feature to dynamically display a list of tasks with a "Done" button next to each item. Clicking "Done" should remove the task from the list.
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
      <NextChapterButton challengeCompleted={challengeCompleted} nextChapter="/chapter6" />
    </div>
  );
}
