// WinModal.tsx
import React from 'react';
import NextFlipTimer from './NextFlipTimer';
import { GAME_NUMBER, LINK } from '../constants/gameConstants';

interface WinModalProps {
  onClose: () => void;
  solvedRowsHistory: number[];
}

const WinModal: React.FC<WinModalProps> = ({ onClose, solvedRowsHistory }) => {
  const emojiMapping: { [key: number]: string } = {
    0: '⬜', // White Square
    1: '🟨', // Yellow Square
    2: '🟧', // Orange Square
    3: '🟩', // Green Square
    4: '🟪', // Purple Square
  };

  // Count the number of times each state appears
  const counts: { [key: number]: number } = solvedRowsHistory.reduce((acc, state) => {
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });

  // Create visualization string: "emoji count" separated by spaces
  const visualizationString = Object.keys(counts)
    .map((state) => {
      const key = parseInt(state, 10);
      const emoji = emojiMapping[key] || '⬜';
      const count = counts[key];
      return `${emoji} ${count}`;
    })
    .join(' ');

  // Calculate total number of moves
  const totalMoves = solvedRowsHistory.length;

  // Clipboard text includes Flip number, link, total moves, and visualization
  const clipboardText = `Flip #${GAME_NUMBER}\n${LINK}\n\nTotal Moves: ${totalMoves}\n${visualizationString}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(clipboardText)
      .then(() => {
        // Optionally, you can add a success message or toast notification here
        console.log('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">You Win!</h2>
        <p className="text-center mb-4">{visualizationString}</p>
        <p className="text-center mb-4">
          Total Moves: <span className="font-semibold">{totalMoves}</span>
        </p>
        <NextFlipTimer />
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleCopy}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Copy to clipboard
          </button>
          <button
            onClick={onClose}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
