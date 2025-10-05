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
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const starterCode = `
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if(task.trim() !== "") setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Task App</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, idx) => <li key={idx}>{t}</li>)}
      </ul>
    </div>
  );
}
`;

export default function Chapter10() {
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  return (
    <div className="max-w-full bg-black mx-auto p-6 space-y-6 text-white">
      <Card className="bg-black text-white border border-fuchsia-900">
        <CardHeader>
          <CardTitle className="text-fuchsia-600 text-2xl font-bold">
            Chapter 10: Final Project – Build Your React App
          </CardTitle>
          <CardDescription className="text-gray-300 mt-2">
            This is your final chapter where you build a complete React app. Combine everything you've learned so far: JSX, Components, Props, State, Hooks, Router, and Context API.
          </CardDescription>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-fuchsia-600">
              🧠 Challenge:
            </h2>
            <p className="mt-2">
              Extend the task app to include a "Complete" button for each task. Completed tasks should be displayed with a line-through style.
            </p>
            <Button
              className={`mt-3 ${
                challengeCompleted ? "bg-green-600" : "bg-fuchsia-800"
              } text-white`}
              onClick={() => setChallengeCompleted(true)}
            >
              {challengeCompleted
                ? "Challenge Completed ✅"
                : "Mark Challenge Complete"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Separator className="my-4 border-gray-700" />

      <Card className="shadow-lg bg-black text-white border border-fuchsia-900">
        <CardContent className="p-0">
          <SandpackEditor code={starterCode} />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          className={`bg-fuchsia-900 text-white ${
            !challengeCompleted && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!challengeCompleted}
        >
          Finish Course 🎉
        </Button>
      </div>
    </div>
  );
}
