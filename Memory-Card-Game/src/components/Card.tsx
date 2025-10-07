import type { Card as CardType } from '../types/game';

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
  disabled: boolean;
}

export default function Card({ card, onClick, disabled }: CardProps) {
  const handleClick = () => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      onClick(card);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-full aspect-square cursor-pointer transition-transform duration-200 ${
        !card.isFlipped && !card.isMatched ? 'hover:scale-105' : ''
      }`}
    >
      <div
        className={`absolute inset-0 rounded-lg shadow-lg transition-all duration-300 ${
          card.isFlipped || card.isMatched ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
          <div className="text-white text-4xl font-bold">?</div>
        </div>
      </div>

      <div
        className={`absolute inset-0 rounded-lg shadow-lg transition-all duration-300 ${
          card.isFlipped || card.isMatched ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <img
          src={card.imageUrl}
          alt="Memory card"
          className={`w-full h-full object-cover rounded-lg ${
            card.isMatched ? 'opacity-60' : ''
          }`}
        />
        {card.isMatched && (
          <div className="absolute inset-0 bg-green-500 bg-opacity-30 rounded-lg flex items-center justify-center">
            <div className="text-white text-5xl">✓</div>
          </div>
        )}
      </div>
    </div>
  );
}
