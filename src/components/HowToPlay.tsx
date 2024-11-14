import React from 'react';

interface HowToPlayProps {
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto w-11/12 sm:w-full">
      <h2 className="text-2xl font-bold mb-4">How to Play</h2>
      <p className="mb-4">
          1. Find four 4-letter words for the given theme.<br/>
          2. Swap and reverse rows/columns to spell the words.<br/>
          3. Words must read alphabetically from top to bottom.<br/><br/>

          Swap: Drag rows/columns onto other rows/columns.<br/>
          Reverse: Click on-screen arrow buttons.<br/>
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
