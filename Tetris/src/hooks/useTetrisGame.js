import { useCallback, useEffect, useState } from "react";
import { randomTetromino, rotate } from "../tetrominos";

const ROWS = 20;
const COLS = 10;

const createStage = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(0));

const checkCollision = (stage, piece, pos) => {
  const { shape } = piece;
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x] !== 0) {
        const newY = pos.y + y;
        const newX = pos.x + x;
        if (newY < 0 || newY >= ROWS || newX < 0 || newX >= COLS) return true;
        if (stage[newY][newX] !== 0) return true;
      }
    }
  }
  return false;
};

export default function useTetrisGame() {
  const [stage, setStage] = useState(createStage());
  const [player, setPlayer] = useState({
    pos: { x: 3, y: 0 },
    piece: randomTetromino(),
  });
  const [next, setNext] = useState(randomTetromino());
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [dropTime, setDropTime] = useState(800);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);

  const mergePiece = useCallback((stg, piece, pos) => {
    const newStage = stg.map((row) => row.slice());
    const { shape, type } = piece;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const sy = pos.y + y,
            sx = pos.x + x;
          if (sy >= 0) newStage[sy][sx] = type;
        }
      }
    }
    return newStage;
  }, []);

  const clearRows = useCallback(
    (stg) => {
      let cleared = 0;
      const newStage = stg.reduce((acc, row) => {
        if (row.every((cell) => cell !== 0)) {
          cleared += 1;
          acc.unshift(Array(COLS).fill(0));
        } else acc.push(row);
        return acc;
      }, []);
      if (cleared) {
        setLines((l) => l + cleared);
        setScore((s) => s + [0, 40, 100, 300, 1200][cleared] * level);
        const newLevel = 1 + Math.floor((lines + cleared) / 10);
        if (newLevel !== level) {
          setLevel(newLevel);
          setDropTime(Math.max(100, 800 - (newLevel - 1) * 70));
        }
      }
      return newStage;
    },
    [level, lines]
  );

  const spawnNew = useCallback(() => {
    setPlayer({ pos: { x: 3, y: 0 }, piece: next });
    setNext(randomTetromino());
  }, [next]);

  const hardLock = useCallback(
    (finalPos = player.pos) => {
      const newStage = mergePiece(stage, player.piece, finalPos);
      const cleared = clearRows(newStage);
      setStage(cleared);
      if (finalPos.y <= 0) {
        setGameOver(true);
        setDropTime(null);
      } else {
        spawnNew();
      }
    },
    [stage, player, mergePiece, clearRows, spawnNew]
  );

  const moveHorizontal = useCallback(
    (dir) => {
      if (paused || gameOver) return;
      const newPos = { x: player.pos.x + dir, y: player.pos.y };
      if (!checkCollision(stage, player.piece, newPos))
        setPlayer((p) => ({ ...p, pos: newPos }));
    },
    [player, stage, paused, gameOver]
  );

  const softDrop = useCallback(() => {
    if (paused || gameOver) return;
    const newPos = { x: player.pos.x, y: player.pos.y + 1 };
    if (!checkCollision(stage, player.piece, newPos)) {
      setPlayer((p) => ({ ...p, pos: newPos }));
    } else {
      hardLock();
    }
  }, [player, stage, hardLock, paused, gameOver]);

  const hardDrop = useCallback(() => {
    if (paused || gameOver) return;
    let finalPos = { ...player.pos };
    while (
      !checkCollision(stage, player.piece, { x: finalPos.x, y: finalPos.y + 1 })
    ) {
      finalPos.y += 1;
    }
    // Merge directly with computed final position (avoid async state race)
    hardLock(finalPos);
  }, [player, stage, hardLock, paused, gameOver]);

  const rotatePiece = useCallback(() => {
    if (paused || gameOver) return;
    const rotated = rotate(player.piece.shape);
    const newPiece = { shape: rotated, type: player.piece.type };
    const kicks = [0, -1, 1, -2, 2];
    for (let i = 0; i < kicks.length; i++) {
      const newPos = { x: player.pos.x + kicks[i], y: player.pos.y };
      if (!checkCollision(stage, newPiece, newPos)) {
        setPlayer((p) => ({ ...p, piece: newPiece, pos: newPos }));
        return;
      }
    }
  }, [player, stage, paused, gameOver]);

  // hold feature removed

  // gravity
  useEffect(() => {
    if (dropTime == null || paused || gameOver) return;
    const id = setInterval(() => softDrop(), dropTime);
    return () => clearInterval(id);
  }, [dropTime, softDrop, paused, gameOver]);

  const togglePause = () => setPaused((p) => !p);

  const restart = () => {
    setStage(createStage());
    setPlayer({ pos: { x: 3, y: 0 }, piece: randomTetromino() });
    setNext(randomTetromino());
    setScore(0);
    setLines(0);
    setLevel(1);
    setGameOver(false);
    setPaused(false);
    setDropTime(800);
  };

  // ghost piece
  const ghost = (() => {
    let gp = { ...player.pos };
    while (!checkCollision(stage, player.piece, { x: gp.x, y: gp.y + 1 }))
      gp.y += 1;
    return gp;
  })();

  return {
    stage,
    player,
    next,
    score,
    lines,
    level,
    gameOver,
    paused,
    ghost,
    actions: {
      moveHorizontal,
      softDrop,
      hardDrop,
      rotatePiece,
      togglePause,
      restart,
    },
  };
}
