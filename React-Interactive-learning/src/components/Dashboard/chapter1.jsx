"use client";
import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";
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

// Starter code
const starterCode = `
import React from "react";

export default function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to React Interactive Learning!</p>
    </div>
  );
}
`;

export default function Chapter1() {
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
        message="You successfully completed the JSX Basics challenge!"
      />

      {/* Chapter Info */}
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 1: JSX Basics
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            Learn how to write HTML-like syntax inside React components using JSX.
            JSX allows you to combine JavaScript logic with HTML structure in React.
          </CardDescription>

          {/* Challenge */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-fuchsia-600">🧠 Challenge:</h2>
            <p className="mt-2">
              Change the text inside the <code>&lt;h1&gt;</code> tag to your name and see it update live!
            </p>
            <Button
              className={`mt-3 ${
                challengeCompleted ? "bg-green-600" : "bg-fuchsia-800"
              } text-white`}
              onClick={handleChallengeComplete}
            >
              {challengeCompleted ? "Challenge Completed ✅" : "Mark Challenge Complete"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Sandpack Editor */}
      <Card className="shadow-lg bg-black text-white border border-fuchsia-900">
        <CardContent className="p-0">
          <Sandpack
            template="react"
            theme={sandpackDark}
            files={{ "/App.js": starterCode }}
            options={{
              showTabs: true,
              showConsole: true,
              showConsoleButton: true,
              showNavigator: true,
              runOnChange: true,
              editorHeight: 600,
            }}
          />
        </CardContent>
      </Card>

      {/* Next Chapter Button */}
      <NextChapterButton
        challengeCompleted={challengeCompleted}
        nextChapter="/chapter2"
      />
    </div>
  );
}
