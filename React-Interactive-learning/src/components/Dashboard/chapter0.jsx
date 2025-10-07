// WarmupStepper.jsx
import React, { useState } from "react";
import  Stepper ,{ Step } from "../ui/Stepper";

export default function Chapter0() {
  const [projectName, setProjectName] = useState("my-first-app");

  return (
    <div className="max-w-full mx-auto py-16 px-6 cursor-pointer">
      <Stepper
        initialStep={1}
        backButtonText="Previous"
        nextButtonText="Next"
        onStepChange={(step) => console.log("Current Step:", step)}
        onFinalStepCompleted={() => console.log("All steps completed!")}
      >
        {/* Step 1: Welcome */}
        <Step>
          <h2 className="text-2xl font-bold mb-4">👋 Welcome</h2>
          <p>
            Welcome to React Interactive Learning! <br />
            In this short guide, you'll learn how to set up a React project
            from scratch.
          </p>
          <p className="mt-2 font-semibold">Click Next to begin your first setup!</p>
        </Step>

        {/* Step 2: Install Node.js */}
        <Step>
          <h2 className="text-2xl font-bold mb-4">💡 Install Node.js</h2>
          <p>
            Before using React, make sure Node.js is installed.
          </p>
          <p className="mt-2 font-mono bg-gray-800 p-2 rounded text-white">
            node -v
          </p>
          <p className="mt-2">If it shows a version, you’re good to go!</p>
        </Step>

        {/* Step 3: Create Your React App */}
        <Step>
          <h2 className="text-2xl font-bold mb-4">Create Your React App</h2>
          <p>Run this command to create your first React project:</p>
          <p className="mt-2 font-mono bg-gray-800 p-2 rounded text-white">
            npx create-react-app {projectName}
          </p>
          <p className="mt-2">This sets up a ready-to-use React environment.</p>
        </Step>

        {/* Step 4: Go Inside Your Project */}
        <Step>
          <h2 className="text-2xl font-bold mb-4">Go Inside Your Project</h2>
          <p className="mt-2 font-mono bg-gray-800 p-2 rounded text-white">
            cd {projectName}
          </p>
        </Step>

        {/* Step 5: Run the Development Server */}
        <Step>
          <h2 className="text-2xl font-bold mb-4">Run the Development Server</h2>
          <p className="mt-2 font-mono bg-gray-800 p-2 rounded text-white">
            npm start
          </p>
          <p className="mt-2">
            🎉 Great! Your app is now running at <span className="font-mono">http://localhost:3000/</span> <br />
            You’ve successfully created and launched your first React app!
          </p>
        </Step>

        {/* Step 6: Completion */}
        <Step>
          <h2 className="text-2xl font-bold mb-4">✅ Warm-up Completed!</h2>
          <p>
            You’ve learned how to create and run a React app. <br />
            Now your <strong>Chapter 1: JSX Basics</strong> is unlocked!
          </p>
        </Step>
      </Stepper>
    </div>
  );
}
