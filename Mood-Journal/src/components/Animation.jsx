function Animation({ mood }) {
  return (
    <div className="animation">
      {mood === "Happy" && <div className="confetti"></div>}
      {mood === "Sad" && <div className="rain"></div>}
      {mood === "Stressed" && <div className="calm"></div>}
      {mood === "Motivated" && <div className="sparkle"></div>}
    </div>
  );
}

export default Animation;
