// WinModal.tsx
import React from 'react';
import NextFlipTimer from './NextFlipTimer';
import { GAME_NUMBER, LINK } from '../constants/gameConstants';

interface WinModalProps {
  onClose: () => void;
  solvedRowsHistory: Record<number, number>;
}

const WinModal: React.FC<WinModalProps> = ({ onClose, solvedRowsHistory }) => {
  const emojiMapping: { [key: number]: string } = {
    0: '🟨', // White Square
    1: '🟧', // Yellow Square
    2: '🟩', // Orange Square
    3: '🟪', // Green Square
  };

  // Create visualization string: "emoji count" separated by spaces
  const visualizationString = Object.keys(solvedRowsHistory)
    .map((state) => {
      const key = parseInt(state, 10);
      const emoji = emojiMapping[key] || '⬜';
      const count = solvedRowsHistory[key];
      return `${emoji} ${count}`;
    })
    .join(' ');

  // Calculate total number of moves as the maximum of the moves taken to solve any row
  const totalMoves = Math.max(...Object.values(solvedRowsHistory));

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
