import React, { useState, useEffect } from "react";
import Chapter0 from "./chapter0";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Layers,
  GitMerge,
  Code,
  List,
  Edit3,
  Zap,
  RefreshCcw,
  Server,
  Map
} from "lucide-react";

export default function Dashboard() {
  const [showWarmup, setShowWarmup] = useState(false);
  const navigate = useNavigate();

  // Show warmup only once
  useEffect(() => {
    const hasSeenWarmup = localStorage.getItem("seenWarmup");
    if (!hasSeenWarmup) setShowWarmup(true);
  }, []);

  const handleCloseWarmup = () => {
    setShowWarmup(false);
    localStorage.setItem("seenWarmup", "true");
  };

  const chapters = [
    { title: "JSX Basics", icon: <FileText size={28} /> },
    { title: "Components", icon: <Layers size={28} /> },
    { title: "Props & State", icon: <GitMerge size={28} /> },
    { title: "Conditional Rendering", icon: <Code size={28} /> },
    { title: "Lists & Keys", icon: <List size={28} /> },
    { title: "Forms & Events", icon: <Edit3 size={28} /> },
    { title: "Hooks Intro", icon: <Zap size={28} /> },
    { title: "useEffect & useState", icon: <RefreshCcw size={28} /> },
    { title: "Context API", icon: <Server size={28} /> },
    { title: "Routing", icon: <Map size={28} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Warmup Popup */}
      {showWarmup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="shadow-2xl w-full max-w-4xl p-8 relative bg-black rounded-lg border-2">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500"
              onClick={handleCloseWarmup}
            >
              &times;
            </button>
            <Chapter0 />
          </div>
        </div>
      )}

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold mb-4 text-purple-900">Welcome</h1>
        <p className="text-gray-300 mb-8">
          Select a chapter below to start learning React interactively.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {chapters.map((chapter, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-black to-purple-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
              onClick={() => navigate(`/chapter${idx + 1}`)}
            >
              <div className="flex items-center gap-4 mb-4">
                {chapter.icon}
                <h2 className="text-2xl font-semibold">{`Chapter ${idx + 1}: ${chapter.title}`}</h2>
              </div>
              <p className="text-gray-400 mb-6">Click below to start learning!</p>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-900 hover:bg-purple-700 text-white rounded-lg font-semibold transition self-start">
                Start Chapter →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
