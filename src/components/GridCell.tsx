// src/components/GridCell.tsx
import React from 'react';
import { Cell } from './Cell';
import { FlipButton } from './FlipButton';
import { checkWordPosition, getWordFromNumbers } from '../utils/solutionChecker';
import { NUMBER_TO_LETTER } from '../constants/gameConstants';

interface GridCellProps {
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
  dragState: {
    sourceRow: number | null;
    sourceCol: number | null;
    isDragging: boolean;
    direction: 'horizontal' | 'vertical' | null;
    targetIndex: number | null;
    highlightedIndices: number[];
    dragOffset: {
      x: number;
      y: number;
    };
  };
  isFlipping: boolean;
  flipType?: 'row' | 'col';
  currentGrid: number[][];
  solution: number[][];
  easyMode: boolean;
}

export const GridCell: React.FC<GridCellProps> = ({
  num,
  rowIndex,
  colIndex,
  isFrozen,
  isFrozenRow,
  isFirstRow,
  isFirstCol,
  onFlip,
  onDragStart,
  dragState,
  isFlipping,
  flipType,
  currentGrid,
  solution,
  easyMode,
}) => {
  const isHighlighted =
    dragState.isDragging &&
    ((dragState.direction === 'horizontal' &&
      dragState.highlightedIndices.includes(colIndex)) ||
      (dragState.direction === 'vertical' &&
        dragState.highlightedIndices.includes(rowIndex)));

  const getCellClass = () => {
    // First check if the cell is being highlighted during drag
    if (isHighlighted) {
      return 'bg-blue-200 shadow-md';
    }

    // If it's a frozen row, use the color scheme based on row index
    if (isFrozenRow) {
      switch (rowIndex) {
        case 0:
          return 'bg-yellow-200 opacity-90';
        case 1:
          return 'bg-orange-200 opacity-90';
        case 2:
          return 'bg-green-200 opacity-90';
        case 3:
          return 'bg-purple-200 opacity-90';
        default:
          return 'bg-gray-200 opacity-90';
      }
    }

    // Check if the current row forms a valid word that appears anywhere in the solution
    // but only in easy mode and when we have a complete row
    if (easyMode && 
        currentGrid[rowIndex]?.length === solution[0]?.length && 
        !isFrozenRow) {
      const position = checkWordPosition(
        currentGrid[rowIndex],
        rowIndex,
        solution,
        true
      );
      
      if (position === 'wrong-position') {
        return 'bg-gray-200'; // Gray background for correct word in wrong position
      }
    }

    return '';
  };

  return (
    <div className="relative w-full h-full">
      <Cell
        num={num}
        rowIndex={rowIndex}
        colIndex={colIndex}
        isFrozen={isFrozen}
        isFrozenRow={isFrozenRow}
        isFirstRow={isFirstRow}
        isFirstCol={isFirstCol}
        onFlip={onFlip}
        onDragStart={onDragStart}
        highlightClass={getCellClass()}
        isFlipping={isFlipping}
        flipType={flipType}
      />
    </div>
  );
};