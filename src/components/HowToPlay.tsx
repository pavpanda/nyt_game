import React from 'react';

interface HowToPlayProps {
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto w-11/12 sm:w-full">
      <h2 className="text-2xl font-bold mb-4">How to Play</h2>
      <p className="mb-4">
        Find the four four-letter themed words hidden in the grid and arrange them <strong>alphabetically</strong> by row!<br/><br />
        Solved words turn green. Drag cells to swap rows or columns. Use the outer widgets to flip (reverse) rows or columns.
      </p>
        <button
        onClick={(onClose)}
        className="mt-6 text-blue-500 hover:underline"
      >
        Close
      </button>
    </div>
  </div>
);

export default HowToPlay;
