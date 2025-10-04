"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Greeting({ show, onClose, message }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Popup Card */}
      <div className="relative bg-black p-8 rounded-2xl shadow-2xl text-center max-w-md mx-auto border border-fuchsia-700">
        <h2 className="text-3xl font-extrabold text-white mb-4 animate-pulse">
          🎉 Congratulations! 🎉
        </h2>
        <p className="text-white text-lg mb-6">
          {message || "You successfully completed the challenge!"}
        </p>
        <Button
          className="bg-fuchsia-700 hover:bg-fuchsia-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
          onClick={onClose}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
