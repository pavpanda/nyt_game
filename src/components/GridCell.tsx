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
  onFlip,
  onDragStart,
  dragState,
}) => {
  // Check if the cell is in the highlighted column or row
  const isHighlighted =
    dragState.isDragging &&
    ((dragState.direction === 'horizontal' &&
      dragState.highlightedIndices.includes(colIndex)) ||
      (dragState.direction === 'vertical' &&
        dragState.highlightedIndices.includes(rowIndex)));

  const getCellClass = () => {
    if (isFrozenRow) {
      return 'bg-green-200 opacity-90'; // Frozen cells
    }
    if (isHighlighted) {
      return 'bg-blue-200 shadow-md'; // Highlighted columns or rows
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
