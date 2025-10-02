import { Puzzle, Clock, Star } from 'lucide-react';
import type { GameStats } from '../types/game';

interface ScoreBoardProps {
  stats: GameStats;
}

export default function ScoreBoard({ stats }: ScoreBoardProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md">
        <Star className="text-yellow-500" size={24} />
        <div>
          <div className="text-sm text-gray-600">Score</div>
          <div className="text-2xl font-bold text-gray-800">{stats.score}</div>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md">
        <Clock className="text-blue-500" size={24} />
        <div>
          <div className="text-sm text-gray-600">Time</div>
          <div className="text-2xl font-bold text-gray-800">{formatTime(stats.time)}</div>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md">
        <Puzzle className="text-blue-500" size={24} />
        <div>
          <div className="text-sm text-gray-600">Matches</div>
          <div className="text-2xl font-bold text-gray-800">{stats.matches} / 10</div>
        </div>
      </div>
    </div>
  );
}
