import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

type DragType = 'row' | 'col' | null;
type Grid = number[][];
type TouchInfo = {
  startX: number;
  startY: number;
  index: number;
  type: 'row' | 'col';
} | null;

const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'b', 2: 'e', 3: 'a', 4: 'r',
  5: 'f', 6: 'i', 7: 's', 8: 'h',
  9: 'l', 10: 'i', 11: 'o', 12: 'n',
  13: 'n', 14: 'e', 15: 'w', 16: 't'
};

const SOLUTION: Grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const scrambleGrid = (grid: Grid): Grid => {
  const moves = 10;
  let currentGrid: Grid = grid.map(row => [...row]);
  
  for (let i = 0; i < moves; i++) {
    const isFlip = Math.random() < 0.5;
    const isRow = Math.random() < 0.5;
    const maxIndex = isRow ? currentGrid.length : currentGrid[0].length;
    const index1 = Math.floor(Math.random() * maxIndex);
    
    if (isFlip) {
      if (isRow) {
        currentGrid[index1] = currentGrid[index1].reverse();
      } else {
        for (let j = 0; j < Math.floor(currentGrid.length / 2); j++) {
          const k = currentGrid.length - 1 - j;
          [currentGrid[j][index1], currentGrid[k][index1]] = 
            [currentGrid[k][index1], currentGrid[j][index1]];
        }
      }
    } else {
      let index2: number;
      do {
        index2 = Math.floor(Math.random() * maxIndex);
      } while (index2 === index1);
      
      if (isRow) {
        const temp = [...currentGrid[index1]];
        currentGrid[index1] = [...currentGrid[index2]];
        currentGrid[index2] = temp;
      } else {
        for (let row = 0; row < currentGrid.length; row++) {
          [currentGrid[row][index1], currentGrid[row][index2]] = 
            [currentGrid[row][index2], currentGrid[row][index1]];
        }
      }
    }
  }
  
  return currentGrid;
};

interface CellProps {
  num: number;
  isFrozen: boolean;
  isHighlighted: boolean;
  isDragTarget: boolean;
}

const Cell: React.FC<CellProps> = ({ num, isFrozen, isHighlighted, isDragTarget }) => (
  <div
    className={`
      w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-base md:text-xl
      ${isFrozen ? 'bg-emerald-50 text-emerald-700' : 'bg-white text-gray-600'}
      ${isHighlighted ? 'bg-blue-50 ring-2 ring-blue-200' : ''}
      ${isDragTarget ? 'ring-2 ring-blue-400' : ''}
      transition-all duration-150
    `}
  >
    {NUMBER_TO_LETTER[num]}
  </div>
);

interface DragHandleProps {
  index: number;
  type: 'row' | 'col';
  dragType: DragType;
  dropIndex: number | null;
  isFrozen?: boolean;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number, type: 'row' | 'col') => void;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onFlip: (index: number, type: 'row' | 'col') => void;
  onTouchStart: (e: React.TouchEvent<HTMLDivElement>, index: number, type: 'row' | 'col') => void;
}

const DragHandle: React.FC<DragHandleProps> = ({
  index,
  type,
  dragType,
  dropIndex,
  isFrozen = false,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  onFlip,
  onTouchStart,
}) => {
  const isColumn = type === 'col';
  const isDragging = dragType === type && dropIndex === index;
  
  return (
    <div 
      className={`
        flex ${isColumn ? 'flex-col' : ''} items-center
        ${isColumn ? 'w-14 md:w-20' : 'h-14 md:h-20'} gap-1 md:gap-2
      `}
    >
      <div
        draggable={!isFrozen}
        onDragStart={(e) => onDragStart(e, index, type)}
        onDragEnd={onDragEnd}
        onDragOver={(e) => dragType === type && onDragOver(e, index)}
        onDrop={(e) => onDrop(e, index)}
        onTouchStart={(e) => onTouchStart(e, index, type)}
        className={`
          w-8 h-8 md:w-12 md:h-12 flex items-center justify-center
          ${isFrozen ? 'opacity-30 cursor-not-allowed' : 'cursor-move hover:bg-gray-50 active:bg-gray-100'}
          ${isDragging ? 'bg-blue-50' : ''}
          rounded-md transition-colors duration-150
        `}
      >
        <div 
          className={`
            ${isColumn ? 'w-0.5 h-3 md:h-4' : 'h-0.5 w-3 md:w-4'} 
            ${isDragging ? 'bg-blue-400' : 'bg-gray-400'}
            transition-colors duration-150
          `} 
        />
      </div>
      <button
        onClick={() => onFlip(index, type)}
        disabled={isFrozen}
        className={`
          w-8 h-8 md:w-12 md:h-12 flex items-center justify-center
          ${isFrozen ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50 active:bg-gray-100'}
          rounded-md transition-colors duration-150
        `}
      >
        <ArrowLeftRight 
          className={`
            w-4 h-4 md:w-5 md:h-5
            ${isFrozen ? 'text-gray-300' : 'text-gray-400'} 
            ${isColumn ? 'rotate-90' : ''} 
          `}
        />
      </button>
    </div>
  );
};

const NumberGrid: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(() => scrambleGrid(SOLUTION));
  const [dragType, setDragType] = useState<DragType>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [frozenRows, setFrozenRows] = useState<Set<number>>(new Set());
  const [touchInfo, setTouchInfo] = useState<TouchInfo>(null);

  const isRowCorrect = (row: number[], targetRow: number[]): boolean => {
    const rowLetters = row.map(num => NUMBER_TO_LETTER[num]);
    const targetLetters = targetRow.map(num => NUMBER_TO_LETTER[num]);
    return rowLetters.join('') === targetLetters.join('');
  };

  useEffect(() => {
    setFrozenRows(prev => {
      const newFrozen = new Set(prev);
      
      grid.forEach((row, index) => {
        if (isRowCorrect(row, SOLUTION[index])) {
          newFrozen.add(index);
        } else {
          newFrozen.delete(index);
        }
      });
      
      return newFrozen;
    });
  }, [grid]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number, type: 'row' | 'col') => {
    if (type === 'row' && frozenRows.has(index)) {
      e.preventDefault();
      return;
    }
    setDragType(type);
    setDragIndex(index);
    
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, index: number, type: 'row' | 'col') => {
    if (type === 'row' && frozenRows.has(index)) return;
    
    const touch = e.touches[0];
    setTouchInfo({
      startX: touch.clientX,
      startY: touch.clientY,
      index,
      type
    });
    
    setDragType(type);
    setDragIndex(index);
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchInfo || !dragType) return;

    const touch = e.touches[0];
    const { startX, startY, type, index } = touchInfo;
    
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    
    if (type === 'row') {
      const elements = document.querySelectorAll(`[data-row-handle]`);
      elements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (touch.clientY >= rect.top && touch.clientY <= rect.bottom && i !== index) {
          setDropIndex(i);
        }
      });
    } else {
      const elements = document.querySelectorAll(`[data-col-handle]`);
      elements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right && i !== index) {
          setDropIndex(i);
        }
      });
    }
  }, [touchInfo, dragType]);

  const handleTouchEnd = useCallback(() => {
    if (dragIndex !== null && dropIndex !== null && dragType !== null) {
      // Handle the drop operation directly instead of creating a synthetic event
      const newGrid = grid.map(row => [...row]);
      
      if (dragType === 'row' && (!frozenRows.has(dragIndex) && !frozenRows.has(dropIndex))) {
        const temp = [...newGrid[dragIndex]];
        newGrid[dragIndex] = [...newGrid[dropIndex]];
        newGrid[dropIndex] = temp;
      } else if (dragType === 'col') {
        for (let row = 0; row < newGrid.length; row++) {
          if (!frozenRows.has(row)) {
            [newGrid[row][dragIndex], newGrid[row][dropIndex]] = 
              [newGrid[row][dropIndex], newGrid[row][dragIndex]];
          }
        }
      }
  
      setGrid(newGrid);
      setMoveCount(prev => prev + 1);
    }
    
    setTouchInfo(null);
    handleDragEnd();
  }, [dragIndex, dropIndex, dragType, grid, frozenRows]);

  useEffect(() => {
    if (touchInfo) {
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      return () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [touchInfo, handleTouchMove, handleTouchEnd]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setDropIndex(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (dragIndex === null || dragType === null || dragIndex === dropIndex) return;
  
    if (dragType === 'row' && (frozenRows.has(dragIndex) || frozenRows.has(dropIndex))) {
      return;
    }
  
    const newGrid = grid.map(row => [...row]);
    
    if (dragType === 'row') {
      const temp = [...newGrid[dragIndex]];
      newGrid[dragIndex] = [...newGrid[dropIndex]];
      newGrid[dropIndex] = temp;
    } else {
      for (let row = 0; row < newGrid.length; row++) {
        if (!frozenRows.has(row)) {
          [newGrid[row][dragIndex], newGrid[row][dropIndex]] = 
            [newGrid[row][dropIndex], newGrid[row][dragIndex]];
        }
      }
    }
  
    setGrid(newGrid);
    setMoveCount(prev => prev + 1);
    handleDragEnd();
  };

  const handleFlip = (index: number, type: 'row' | 'col') => {
    if (type === 'row' && frozenRows.has(index)) return;

    const newGrid = grid.map(row => [...row]);
    
    if (type === 'row') {
      newGrid[index] = newGrid[index].reverse();
    } else {
      const unfrozenValues: (number | null)[] = Array(grid.length).fill(null);
      let unfrozenCount = 0;
      
      for (let i = 0; i < grid.length; i++) {
        if (!frozenRows.has(i)) {
          unfrozenValues[unfrozenCount] = grid[i][index];
          unfrozenCount++;
        }
      }
      
      const reversedUnfrozen = unfrozenValues.slice(0, unfrozenCount).reverse();
      
      let unfrozenIndex = 0;
      for (let i = 0; i < grid.length; i++) {
        if (!frozenRows.has(i)) {
          newGrid[i][index] = reversedUnfrozen[unfrozenIndex]!;
          unfrozenIndex++;
        }
      }
    }
    
    setGrid(newGrid);
    setMoveCount(prev => prev + 1);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setDragType(null);
    setDropIndex(null);
  };

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 pt-32 md:pt-60 p-4 md:p-8">
      <div className="text-center space-y-2 absolute top-9 md:top-16">
        <h1 className="text-8xl md:text-8xl font-bold text-gray-800">Flip</h1>
      </div>
      
      <div className="relative">
        <div className="grid grid-cols-4 gap-px bg-gray-100">
          {grid.map((row, rowIndex) =>
            row.map((num, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                num={num}
                isFrozen={frozenRows.has(rowIndex)}
                isHighlighted={
                  (dragType === 'row' && rowIndex === dragIndex) ||
                  (dragType === 'col' && colIndex === dragIndex)
                }
                isDragTarget={
                  (dragType === 'row' && rowIndex === dropIndex) ||
                  (dragType === 'col' && colIndex === dropIndex)
                }
              />
            ))
          )}
        </div>

        <div className="absolute -left-14 md:-left-24 top-0 space-y-px">
          {grid.map((_, index) => (
            <DragHandle
              key={`row-${index}`}
              index={index}
              type="row"
              dragType={dragType}
              dropIndex={dropIndex}
              isFrozen={frozenRows.has(index)}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onFlip={handleFlip}
              onTouchStart={handleTouchStart}
              data-row-handle={index}
            />
          ))}
        </div>

        <div className="absolute -top-14 md:-top-24 left-0 flex space-x-px">
          {grid[0].map((_, index) => (
            <DragHandle
              key={`col-${index}`}
              index={index}
              type="col"
              dragType={dragType}
              dropIndex={dropIndex}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onFlip={handleFlip}
              onTouchStart={handleTouchStart}
              data-col-handle={index}
            />
          ))}
        </div>
      </div>

      <div className="text-sm md:text-base text-gray-500 mt-4 md:mt-6">
        Moves: {moveCount} | Completed Rows: {frozenRows.size}
      </div>
      <h2 className="text-base md:text-lg text-gray-600">Theme: Animals</h2>
    </div>
  );
};

export default NumberGrid;