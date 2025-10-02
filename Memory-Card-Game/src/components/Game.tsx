import { useMemoryGame } from '../hooks/useMemoryGame';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import GameControls from './GameControls';
import HighScores from './HighScores';

export default function Game() {
  const {
    cards,
    stats,
    isPlaying,
    isPaused,
    isLoading,
    isGameComplete,
    flippedCards,
    handleCardClick,
    togglePause,
    newGame,
    getHighScores,
  } = useMemoryGame();

  const highScores = getHighScores();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          Memory Card Game
        </h1>

        <ScoreBoard stats={stats} />

        <div className="my-8 flex justify-center">
          <GameControls
            onNewGame={newGame}
            onTogglePause={togglePause}
            isPaused={isPaused}
            isPlaying={isPlaying}
            disabled={isLoading}
          />
        </div>

        {isGameComplete && (
          <div className="bg-green-500 text-white text-center py-4 px-6 rounded-lg mb-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
            <p className="text-lg">
              You completed the game in {stats.time} seconds with a score of {stats.score}!
            </p>
          </div>
        )}

        {isPaused && (
          <div className="bg-yellow-500 text-white text-center py-3 px-6 rounded-lg mb-6 max-w-md mx-auto font-semibold">
            Game Paused
          </div>
        )}

        {isLoading ? (
          <div className="text-white text-center text-xl">Loading game...</div>
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={handleCardClick}
                disabled={flippedCards.length === 2 || isPaused}
              />
            ))}
          </div>
        )}

        <HighScores highScores={highScores} />
      </div>
    </div>
  );
}
