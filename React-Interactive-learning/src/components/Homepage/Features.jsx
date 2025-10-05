"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Zero-Setup Live Coding Sandboxes",
    description:
      "Instantly write, edit, and run real React code directly in your browser. Skip the downloads and environment setup—your learning starts immediately.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-semibold p-8 text-center">
        Zero-Setup Live Coding Sandboxes
      </div>
    ),
  },
  {
    title: "Progressive Mastery (Chapter System)",
    description:
      "Master one concept at a time. Each successful challenge automatically unlocks the next foundational concept, giving you a clear path to expertise.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-xl font-semibold p-8 text-center">
        Progressive Mastery
      </div>
    ),
  },
  {
    title: "Learning by Doing, Not Watching",
    description:
      "Our platform integrates concise explanations with hands-on coding tasks. You get instant, actionable feedback to reinforce muscle memory and understanding.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white text-xl font-semibold p-8 text-center">
        Learning by Doing, Not Watching
      </div>
    ),
  },
  {
    title: "Always Save Your Spot",
    description:
      "Your progress and custom code snippets are automatically saved locally. Log back in anytime and pick up exactly where you left off, even without an account.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-semibold p-8 text-center">
        Always Save Your Spot
      </div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
