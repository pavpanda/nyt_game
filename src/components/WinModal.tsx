// WinModal.tsx
import React from 'react';
import NextFlipTimer from './NextFlipTimer'
interface WinModalProps {
  onClose: () => void;
  solvedRowsHistory: number[];
}

const WinModal: React.FC<WinModalProps> = ({
  onClose,
  solvedRowsHistory,
}) => {

  const emojiMapping: { [key: number]: string } = {
    0: '⬜', // White Square
    1: '🟨', // Yellow Square
    2: '🟧', // Orange Square
    3: '🟩', // Green Square
    4: '🟪', // Green Square (using the same emoji for simplicity)
  };

  const visualizationString = solvedRowsHistory
    .map((solvedRows, index) => {
      const emoji = emojiMapping[solvedRows] || '⬜';
      // Add a line break after every 6 emojis
      return emoji + ((index + 1) % 6 === 0 ? '\n' : ' ');
    })
    .join('');

  const handleCopy = () => {
    navigator.clipboard
      .writeText(visualizationString)
      .then(() => {
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">You Win!</h2>
        <p className="text-center mb-4 whitespace-pre-line">{visualizationString}</p>
        <NextFlipTimer />
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleCopy} 
            className="mt-6 text-blue-500 hover:underline"
          >
            Copy to clipboard
          </button>
          <button 
            onClick={onClose} 
            className="mt-6 text-blue-500 hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;