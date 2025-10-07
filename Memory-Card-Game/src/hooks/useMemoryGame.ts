import { useState, useEffect, useCallback } from 'react';
import type { Card, GameStats, HighScore } from '../types/game';
import { fetchRandomImages } from '../utils/imageApi';

const POINTS_PER_MATCH = 10;
const FLIP_BACK_DELAY = 1000;

export function useMemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [stats, setStats] = useState<GameStats>({ score: 0, time: 0, matches: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying && !isPaused) {
      interval = window.setInterval(() => {
        setStats(prev => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isPaused]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = useCallback(async () => {
    setIsLoading(true);
    try {
      const images = await fetchRandomImages(10);
      const cardPairs: Card[] = [];

      images.forEach((imageUrl, index) => {
        cardPairs.push(
          {
            id: `${index}-a`,
            imageUrl,
            isFlipped: false,
            isMatched: false,
            pairId: index,
          },
          {
            id: `${index}-b`,
            imageUrl,
            isFlipped: false,
            isMatched: false,
            pairId: index,
          }
        );
      });

      setCards(shuffleArray(cardPairs));
      setFlippedCards([]);
      setStats({ score: 0, time: 0, matches: 0 });
      setIsPlaying(true);
      setIsPaused(false);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleCardClick = useCallback((clickedCard: Card) => {
    if (flippedCards.length === 2 || isPaused) return;

    setCards(prev =>
      prev.map(card =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;

      if (first.pairId === second.pairId) {
        setCards(prev =>
          prev.map(card =>
            card.pairId === first.pairId ? { ...card, isMatched: true } : card
          )
        );
        setStats(prev => ({
          ...prev,
          score: prev.score + POINTS_PER_MATCH,
          matches: prev.matches + 1,
        }));
        setFlippedCards([]);

        if (stats.matches + 1 === 10) {
          setIsPlaying(false);
          saveHighScore(stats.score + POINTS_PER_MATCH, stats.time);
        }
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, FLIP_BACK_DELAY);
      }
    }
  }, [flippedCards, isPaused, stats]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const newGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  const saveHighScore = (finalScore: number, finalTime: number) => {
    const highScores = getHighScores();
    const newScore: HighScore = {
      score: finalScore,
      time: finalTime,
      date: new Date().toISOString(),
    };

    highScores.push(newScore);
    highScores.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.time - b.time;
    });

    localStorage.setItem('memoryGameHighScores', JSON.stringify(highScores.slice(0, 5)));
  };

  const getHighScores = (): HighScore[] => {
    const stored = localStorage.getItem('memoryGameHighScores');
    return stored ? JSON.parse(stored) : [];
  };

  const isGameComplete = stats.matches === 10;

  return {
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
  };
}
