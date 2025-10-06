import React from "react";

export default function MiniMatrix({ piece, title }) {
  const size = 4;
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));
  if (piece) {
    const { shape, type } = piece;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x]) matrix[y][x] = type;
      }
    }
  }
  return (
    <div className="mini-wrapper">
      <div className="mini-title">{title}</div>
      <div className="mini-grid">
        {matrix.flat().map((c, i) => (
          <div key={i} className={`cell ${c ? "filled " + c : ""}`}></div>
        ))}
      </div>
    </div>
  );
}
