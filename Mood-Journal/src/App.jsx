import MoodSelector from "./components/MoodSelector";
import MessageDisplay from "./components/MessageDisplay";
import Animation from "./components/Animation";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const App = () => {
  const [mood, setMood] = useState(null);

  useEffect(() => {
    if(mood) {
      gsap.to(".app", {
        background: moodBackgrounds[mood],
        duration: 1.4
      });
    }
  }, [mood]);

  return (
    <div className={`app ${mood?.toLowerCase()}`}>
      <h1>🧠 Mood Journal App</h1>
      <MoodSelector setMood={setMood} />
      {mood && <MessageDisplay mood={mood} />}
      {mood && <Animation mood={mood} />}
    </div>
  );
};

const moodBackgrounds = {
  Happy: "linear-gradient(135deg, #ffefba, #ffffff)",
  Sad: "linear-gradient(135deg, #89f7fe, #66a6ff)",
  Stressed: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  Motivated: "linear-gradient(135deg, #a8edea, #fed6e3)"
};

export default App;
