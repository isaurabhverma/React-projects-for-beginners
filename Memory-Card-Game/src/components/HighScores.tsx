import { Trophy } from 'lucide-react';
import type { HighScore } from '../types/game';

interface HighScoresProps {
  highScores: HighScore[];
}

export default function HighScores({ highScores }: HighScoresProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (highScores.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="text-yellow-500" size={24} />
        <h2 className="text-xl font-bold text-gray-800">High Scores</h2>
      </div>

      <div className="space-y-2">
        {highScores.map((score, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-600 w-6">{index + 1}.</span>
              <div>
                <div className="font-semibold text-gray-800">{score.score} pts</div>
                <div className="text-sm text-gray-500">{formatDate(score.date)}</div>
              </div>
            </div>
            <div className="text-gray-600 font-medium">{formatTime(score.time)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
