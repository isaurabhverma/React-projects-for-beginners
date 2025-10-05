"use client";
import { Button } from "@/components/ui/button";
import React from "react";

import { useNavigate } from "react-router-dom";

export default function NextChapterButton({ challengeCompleted, nextChapter }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (challengeCompleted && nextChapter) {
      navigate(nextChapter);
    }
  };

  return (
    <div className="flex justify-end mt-4">
      <Button
        className={`bg-fuchsia-900 text-white ${
          !challengeCompleted ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={!challengeCompleted}
        onClick={handleNext}
      >
        Next Chapter →
      </Button>
    </div>
  );
}
