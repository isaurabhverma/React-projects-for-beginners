export interface Card {
  id: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
  pairId: number;
}

export interface GameStats {
  score: number;
  time: number;
  matches: number;
}

export interface HighScore {
  score: number;
  time: number;
  date: string;
}
