// 'use client'
import Image from "next/image";
import React, {useState} from 'react';
export default function Home() {
  const flashcards = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      answer: "The Pacific Ocean"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "Au"
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Get the current flashcard object
  const currentCard = flashcards[currentCardIndex];

  // Flip the card to show the answer or question
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Move to the next card, looping back to the start if at the end
  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  // Move to the previous card, looping back to the end if at the start
  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };
  return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-2xl text-center transform transition-all duration-500">
        <h1 className="text-4xl font-extrabold text-white mb-8 select-none">
          LoomyGo Flashcards
        </h1>

        <div
          onClick={handleFlip}
          className={`relative w-full h-80 bg-gray-700 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-500 [transform-style:preserve-3d] hover:scale-105 ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Card Front */}
          <div className={`absolute inset-0 flex items-center justify-center p-6 backface-hidden transition-opacity duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-3xl font-semibold text-gray-200">
              {currentCard.question}
            </p>
          </div>
          {/* Card Back */}
          <div className={`absolute inset-0 block items-center justify-center p-6 backface-hidden rotate-y-180 transition-opacity duration-500 ${isFlipped ?   'opacity-100' : 'opacity-0'}`}>
      
            <p className="text-3xl font-bold text-white">
              {currentCard.answer}
            </p>
            <button className='bg-red-500 text-white p-2 rounded-xl m-3 hover:cursor-pointer hover:scale-105 hover:duration-300'>I didn't know this</button>
            <button className='bg-blue-500 text-white p-2 rounded-xl m-3 hover:cursor-pointer hover:scale-105 hover:duration-300'>I knew this</button>
          </div>
        </div>

        <p className="text-gray-400 mt-4 mb-6">
          Card {currentCardIndex + 1} of {flashcards.length}
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition-colors duration-300 transform hover:-translate-y-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
}
