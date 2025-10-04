"use client";
import React, { useState, createContext, useContext } from "react";
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
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Context API Example</h1>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}
`;

export default function Chapter9() {
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChallengeComplete = () => {
    setChallengeCompleted(true);
    setShowPopup(true);
  };

  return (
    <div className="max-w-full bg-black mx-auto p-6 space-y-6 text-white relative">
      <Greeting show={showPopup} onClose={() => setShowPopup(false)} />
      
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 9: Context API & State Management
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            Context API allows you to pass data through the component tree without having to pass props manually at every level. It's useful for managing global state like theme, authentication, or language preferences.
          </CardDescription>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">🧠 Challenge:</h2>
            <p className="mt-2">
              Extend the context to include a "fontSize" property. Add buttons to increase or decrease font size from the child component.
            </p>
            <Button
              className={`mt-3 ${challengeCompleted ? "bg-green-600" : "bg-fuchsia-800"} text-white`}
              onClick={handleChallengeComplete}
            >
              {challengeCompleted ? "Challenge Completed ✅" : "Mark Challenge Complete"}
            </Button>
          </div>
        </CardHeader>
      </Card>


      <Card className="shadow-lg bg-black text-white border border-fuchsia-900">
        <CardContent className="p-0">
          <SandpackEditor code={starterCode} />
        </CardContent>
      </Card>

      <NextChapterButton challengeCompleted={challengeCompleted} nextChapter="/chapter10" />
    </div>
  );
}