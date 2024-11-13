import React from 'react';

interface HowToPlayProps {
  onClose: () => void;
}

const HowToPlay: React.FC<HowToPlayProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto w-11/12 sm:w-full">
      <h2 className="text-2xl font-bold mb-4">How to Play</h2>
      <p className="mb-4">
        There are four four-letter words hidden in the 4x4 grid you see.<br/><br />
        In order to solve the puzzle, you need to arrange the letters row-wise to form words that satisfy the theme
        and place them <strong>in alphabetical order</strong>.<br/><br />
        When you've "solved" a word, it will freeze and turn green. If you think you've solved a word and it hasn't turned green,
        it might be in the wrong row! If it starts with a "b," try moving it up to the first row! If it starts with a "y," try 
        moving it down to the last row!<br /><br />
        The outer buttons allow you to swap rows or columns by dragging.<br/><br />
        The inner buttons allow you to flip rows or columns (reverse the order).<br/><br />
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
