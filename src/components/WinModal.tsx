// WinModal.tsx
import React from 'react';

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
    .map((solvedRows) => emojiMapping[solvedRows] || '⬜')
    .join(' ');

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
        <p className="text-center mb-4">{visualizationString}</p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleCopy} 
            className="text-green-500 hover:text-green-600 font-bold py-2 px-4 rounded border border-green-500 hover:border-green-600"
          >
            Copy to clipboard
          </button>
          <button 
            onClick={onClose} 
            className="text-blue-500 hover:text-blue-600 font-bold py-2 px-4 rounded border border-blue-500 hover:border-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
