import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MoodSelector = ({ setMood }) => {
  const moods = ["Happy", "Sad", "Stressed", "Motivated"];
  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.from(buttonsRef.current, {
      opacity: 30,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="mood-selector">
      <h2>Select Your Mood</h2>
      {moods.map((mood, index) => (
        <button
          key={mood}
          ref={el => (buttonsRef.current[index] = el)}
          onClick={() => setMood(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
