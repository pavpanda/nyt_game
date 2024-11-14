import React from 'react';
import { FaArrowsAltH, FaArrowsAltV } from 'react-icons/fa';

interface FlipButtonProps {
  direction: 'row' | 'col';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const FlipButton: React.FC<FlipButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  className,
}) => {
  const Icon = direction === 'row' ? FaArrowsAltH : FaArrowsAltV;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative 
        bg-transparent 
        ${disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'} 
        p-1 
        ${className}
      `}
      aria-label={`Flip ${direction === 'row' ? 'Row' : 'Column'}`}
    >
      <Icon size={16} />
      {/* Tooltip */}
      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        {disabled ? 'Row locked' : `Flip ${direction === 'row' ? 'Row' : 'Column'}`}
      </span>
    </button>
  );
};