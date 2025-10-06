import React from "react";
import useTetrisGame from "../hooks/useTetrisGame";
import Stage from "./Stage";
import MiniMatrix from "./MiniMatrix";
import "../styles/tetris.css";

export default function Tetris() {
  const game = useTetrisGame();
  const {
    stage,
    player,
    next,
    score,
    lines,
    level,
    ghost,
    gameOver,
    paused,
    actions,
  } = game;
  const {
    moveHorizontal,
    softDrop,
    hardDrop,
    rotatePiece,
    togglePause,
    restart,
  } = actions;

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") moveHorizontal(-1);
      else if (e.key === "ArrowRight") moveHorizontal(1);
      else if (e.key === "ArrowDown") softDrop();
      else if (e.key === "ArrowUp") rotatePiece();
      else if (e.code === "Space") {
        e.preventDefault();
        hardDrop();
      } else if (e.key.toLowerCase() === "p") togglePause();
      else if (e.key === "Enter") restart();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [moveHorizontal, softDrop, rotatePiece, hardDrop, togglePause, restart]);

  return (
    <div className="tetris-layout">
      <div className="panel main">
        <Stage stage={stage} player={player} ghost={ghost} />
        {gameOver && <div className="overlay status">Game Over</div>}
        {paused && !gameOver && <div className="overlay status">Paused</div>}
      </div>
      <div className="panel side">
        <h1 className="title">TETRIS</h1>
        <div className="stats">
          <div>
            <label>Score</label>
            <span>{score}</span>
          </div>
          <div>
            <label>Lines</label>
            <span>{lines}</span>
          </div>
          <div>
            <label>Level</label>
            <span>{level}</span>
          </div>
        </div>
        <div className="mini-section">
          <MiniMatrix piece={next} title="Next" />
        </div>
        <div className="buttons">
          <button onClick={restart}>Start / Restart</button>
          <button onClick={togglePause}>{paused ? "Resume" : "Pause"}</button>
          <button onClick={hardDrop}>Hard Drop</button>
        </div>
        <div className="help">
          <p>Controls:</p>
          <ul>
            <li>← → : move</li>
            <li>↑ : rotate</li>
            <li>↓ : soft drop</li>
            <li>Space : hard drop</li>
            <li>P : pause</li>
            <li>Enter : restart</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
