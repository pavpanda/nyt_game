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

  return (
    <div
      data-row={rowIndex}
      data-col={colIndex}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`
        relative
        flex items-center justify-center
        w-full h-full
        rounded-lg
        text-xl md:text-2xl font-bold
        ${isFrozenRow ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}
        ${highlightClass || 'bg-white'}
        select-none touch-none
        transition-all duration-200
        ${!isFrozenRow && 'hover:bg-gray-100'}
      `}
    >
      {letter}
      {isFirstRow && (
        <div className="absolute -top-6 inset-x-0 flex justify-center">
          <FlipButton
            direction="col"
            onClick={() => onFlip(colIndex, 'col')}
          />
        </div>
      )}
      {isFirstCol && (
        <div className="absolute inset-y-0 -left-6 flex items-center">
          <FlipButton
            direction="row"
            onClick={() => onFlip(rowIndex, 'row')}
            disabled={isFrozenRow}
          />
        </div>
      )}
    </div>
  );
};
