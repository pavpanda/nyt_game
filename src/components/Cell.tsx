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
  flipType?: 'row' | 'col'; // Determines the flip direction
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
    if (!isFrozenRow) {
      e.preventDefault();
      onDragStart(e.clientX, e.clientY, rowIndex, colIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isFrozenRow) {
      const touch = e.touches[0];
      onDragStart(touch.clientX, touch.clientY, rowIndex, colIndex);
    }
  };

  // Determine the appropriate animation class based on flip type
  const flipAnimationClass = isFlipping
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
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="relative w-full h-full"
    >
      {/* Content with Flip Animation */}
      <div
        className={`absolute inset-0
          flex items-center justify-center
          rounded-lg
          text-xl md:text-2xl font-bold
          ${isFrozenRow ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}
          ${highlightClass || 'bg-white'}
          select-none touch-none
          transition-all duration-200
          ${!isFrozenRow ? 'hover:bg-gray-100' : ''}
          ${flipAnimationClass}
        `}
      >
        {letter}
      </div>

      {/* Flip Button for Columns (First Row) */}
      {isFirstRow && (
        <div className="absolute -top-6 inset-x-0 flex justify-center pointer-events-none">
          {/* Enable pointer events only on the FlipButton */}
          <div className="pointer-events-auto">
            <FlipButton
              direction="col"
              onClick={() => onFlip(colIndex, 'col')}
            />
          </div>
        </div>
      )}

      {/* Flip Button for Rows (First Column) */}
      {isFirstCol && (
        <div className="absolute inset-y-0 -left-6 flex items-center pointer-events-none">
          {/* Enable pointer events only on the FlipButton */}
          <div className="pointer-events-auto">
            <FlipButton
              direction="row"
              onClick={() => onFlip(rowIndex, 'row')}
              disabled={isFrozenRow}
            />
          </div>
        </div>
      )}
    </div>
  );
};
