import React from 'react';
import { Cell } from './Cell';

interface GridCellProps {
  num: number;
  rowIndex: number;
  colIndex: number;
  isFrozen: boolean;
  isFrozenRow: boolean;
  isFirstRow: boolean;
  isFirstCol: boolean;
  solvedRowNumber: number;
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
  };
}

export const GridCell: React.FC<GridCellProps> = ({
  num,
  rowIndex,
  colIndex,
  isFrozen,
  isFrozenRow,
  isFirstRow,
  isFirstCol,
  solvedRowNumber,
  onFlip,
  onDragStart,
  dragState,
}) => {
  const isHighlighted =
    dragState.isDragging &&
    ((dragState.direction === 'horizontal' &&
      dragState.highlightedIndices.includes(colIndex)) ||
      (dragState.direction === 'vertical' &&
        dragState.highlightedIndices.includes(rowIndex)));

  const getCellClass = () => {
    if (isFrozenRow) {
      if (process.env.NODE_ENV === 'development') {
        switch (solvedRowNumber) {
          case 1:
            return 'bg-yellow-200 opacity-90';
          case 2:
            return 'bg-orange-200 opacity-90';
          case 3:
            return 'bg-green-200 opacity-90';
          case 4:
            return 'bg-purple-200 opacity-90';
          default:
            return 'bg-gray-200 opacity-90';
        }
      } else {
        switch (solvedRowNumber) {
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
    }
    if (isHighlighted) {
      return 'bg-blue-200 shadow-md';
    }
    return '';
  };

  return (
    <div
      className={`
        rounded-lg 
        transition-all 
        duration-200 
        ${getCellClass()}
      `}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
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
      />
    </div>
  );
};