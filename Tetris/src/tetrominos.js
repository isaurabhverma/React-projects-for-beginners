export const TETROMINOES = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    type: "I",
  },
  J: {
    shape: [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    type: "J",
  },
  L: {
    shape: [
      [0, 0, 3],
      [3, 3, 3],
      [0, 0, 0],
    ],
    type: "L",
  },
  O: {
    shape: [
      [4, 4],
      [4, 4],
    ],
    type: "O",
  },
  S: {
    shape: [
      [0, 5, 5],
      [5, 5, 0],
      [0, 0, 0],
    ],
    type: "S",
  },
  T: {
    shape: [
      [0, 6, 0],
      [6, 6, 6],
      [0, 0, 0],
    ],
    type: "T",
  },
  Z: {
    shape: [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ],
    type: "Z",
  },
};

const keys = Object.keys(TETROMINOES);

export function randomTetromino() {
  const r = keys[Math.floor(Math.random() * keys.length)];
  const t = TETROMINOES[r];
  return { shape: t.shape.map((row) => row.slice()), type: t.type };
}

export function rotate(shape) {
  // rotate clockwise
  const N = shape.length;
  const result = Array.from({ length: N }, () => Array(N).fill(0));
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      result[x][N - 1 - y] = shape[y][x] || 0;
    }
  }
  return result;
}
