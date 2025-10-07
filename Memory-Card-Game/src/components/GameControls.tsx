import { Play, Pause, RotateCcw } from 'lucide-react';

interface GameControlsProps {
  onNewGame: () => void;
  onTogglePause: () => void;
  isPaused: boolean;
  isPlaying: boolean;
  disabled: boolean;
}

export default function GameControls({
  onNewGame,
  onTogglePause,
  isPaused,
  isPlaying,
  disabled,
}: GameControlsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onNewGame}
        disabled={disabled}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        <RotateCcw size={20} />
        New Game
      </button>

      {isPlaying && (
        <button
          onClick={onTogglePause}
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          {isPaused ? (
            <>
              <Play size={20} />
              Resume
            </>
          ) : (
            <>
              <Pause size={20} />
              Pause
            </>
          )}
        </button>
      )}
    </div>
  );
}
