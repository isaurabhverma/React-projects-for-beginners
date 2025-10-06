import React from "react";

const ROWS = 20;
const COLS = 10;

export default function Stage({ stage, player, ghost }) {
  const display = stage.map((r) => r.slice());
  const { piece, pos } = player;
  // ghost overlay marked with lowercase type for styling
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const gy = ghost.y + y,
          gx = ghost.x + x;
        if (
          gy >= 0 &&
          gy < ROWS &&
          gx >= 0 &&
          gx < COLS &&
          display[gy][gx] === 0
        )
          display[gy][gx] = "ghost";
      }
    }
  }
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const sy = pos.y + y,
          sx = pos.x + x;
        if (sy >= 0 && sy < ROWS && sx >= 0 && sx < COLS)
          display[sy][sx] = piece.type;
      }
    }
  }
  return (
    <div className="stage-grid">
      {display.flat().map((cell, i) => (
        <div key={i} className={`cell ${cell ? "filled " + cell : ""}`}></div>
      ))}
    </div>
  );
}
