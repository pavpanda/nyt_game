// src/components/Cell.tsx
import React from 'react';
import { NUMBER_TO_LETTER } from '../constants/gameConstants';
import { FlipButton } from './FlipButton';

interface CellProps {
  num: number;
  rowIndex: number;
  colIndex: number;
  isFrozen: boolean;
  isFrozenRow: boolean;
  isFirstRow: boolean;
  isFirstCol: boolean;
  onFlip: (index: number, type: 'row' | 'col') => void;
  onDragStart: (
    x: number,
    y: number,
    rowIndex: number,
    colIndex: number
  ) => void;
  highlightClass?: string;
  isFlipping: boolean;
  flipType?: 'row' | 'col';
}

export const Cell: React.FC<CellProps> = ({
  num,
  rowIndex,
  colIndex,
  isFrozen,
  isFrozenRow,
  isFirstRow,
  isFirstCol,
  onFlip,
  onDragStart,
  highlightClass,
  isFlipping,
  flipType,
}) => {
  const letter = NUMBER_TO_LETTER[num];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isFrozenRow && !isFrozen) {
      e.preventDefault();
      onDragStart(e.clientX, e.clientY, rowIndex, colIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isFrozenRow && !isFrozen) {
      const touch = e.touches[0];
      onDragStart(touch.clientX, touch.clientY, rowIndex, colIndex);
    }
  };

  const flipAnimationClass =
    !isFrozenRow && !isFrozen && isFlipping
      ? flipType === 'row'
        ? 'flip-horizontal-animation'
        : flipType === 'col'
        ? 'flip-vertical-animation'
        : ''
      : '';

  return (
    <div
      data-row={rowIndex}
      data-col={colIndex}
      className="relative w-full h-full"
    >
      {/* Cell Content */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`absolute inset-0
          flex items-center justify-center
          rounded-lg
          text-xl md:text-2xl font-bold
          ${isFrozenRow ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}
          ${highlightClass || 'bg-white'}
          select-none touch-none
          transition-all duration-200
          ${!isFrozenRow && !isFrozen ? 'hover:bg-gray-100' : ''}
          ${flipAnimationClass}
        `}
      >
        {letter}
      </div>
    </div>
  );
};