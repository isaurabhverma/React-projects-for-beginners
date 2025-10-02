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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 px-4 relative">
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

      {/* Modal for game completion */}
      {isGameComplete && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Congratulations!</h2>
            <p className="text-lg mb-6">
              You completed the game in {stats.time} seconds with a score of {stats.score}!
            </p>
            <button
              onClick={newGame}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {isPaused && !isGameComplete && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          {/* Blur the background behind the modal */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>

          <div className="relative bg-green-400 text-white rounded-lg p-6 max-w-sm text-center shadow-lg z-50">
            <h2 className="text-2xl font-bold mb-2">Game Paused</h2>
            <p className="mb-4">Take a break or resume whenever you’re ready!</p>
            <button
              onClick={togglePause}
              className="bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded"
            >
              Resume
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
