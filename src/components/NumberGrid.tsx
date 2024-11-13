import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import HowToPlay from './HowToPlay'; // Make sure to adjust the import path


type DragType = 'row' | 'col' | null;
type Grid = number[][];

interface TouchDragState {
  active: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  elementIndex: number;
  dragType: DragType;
  initialRect: DOMRect | null;
}

const initialTouchState: TouchDragState = {
  active: false,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  elementIndex: -1,
  dragType: null,
  initialRect: null,
};

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

// Helper function to get element position relative to its parent
const getRelativePosition = (element: HTMLElement, parent: HTMLElement) => {
  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  return {
    x: elementRect.left - parentRect.left,
    y: elementRect.top - parentRect.top
  };
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
      select-none
    `}
  >
    {NUMBER_TO_LETTER[num]}
  </div>
);

interface DragHandleProps {
  index: number;
  type: 'row' | 'col';
  isActive: boolean;
  isFrozen?: boolean;
  onTouchStart: (e: React.TouchEvent, index: number, type: 'row' | 'col') => void;
  onFlip: (index: number, type: 'row' | 'col') => void;
  onMouseDown: (e: React.MouseEvent, index: number, type: 'row' | 'col') => void;
}

const DragHandle: React.FC<DragHandleProps> = ({
  index,
  type,
  isActive,
  isFrozen = false,
  onTouchStart,
  onFlip,
  onMouseDown,
}) => {
  const isColumn = type === 'col';
  
  return (
    <div 
      className={`
        flex ${isColumn ? 'flex-col' : ''} items-center
        ${isColumn ? 'w-14 md:w-20' : 'h-14 md:h-20'} gap-1 md:gap-2
        select-none
      `}
      data-handle-type={type}
      data-handle-index={index}
    >
      <div
        onTouchStart={(e) => onTouchStart(e, index, type)}
        onMouseDown={(e) => onMouseDown(e, index, type)} // Add this line
        className={`
          w-8 h-8 md:w-12 md:h-12 flex items-center justify-center
          ${isFrozen ? 'opacity-30' : 'active:bg-gray-100'}
          ${isActive ? 'bg-blue-50' : ''}
          rounded-md transition-colors duration-150
        `}
      >
        <div 
          className={`
            ${isColumn ? 'w-0.5 h-3 md:h-4' : 'h-0.5 w-3 md:w-4'} 
            ${isActive ? 'bg-blue-400' : 'bg-gray-400'}
          `} 
        />
      </div>
      <button
        onClick={() => onFlip(index, type)}
        disabled={isFrozen}
        className={`
          w-8 h-8 md:w-12 md:h-12 flex items-center justify-center
          ${isFrozen ? 'opacity-30' : 'hover:bg-gray-50 active:bg-gray-100'}
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
  const [moveCount, setMoveCount] = useState<number>(0);
  const [frozenRows, setFrozenRows] = useState<Set<number>>(new Set());
  const [touchDrag, setTouchDrag] = useState<TouchDragState>(initialTouchState);
  const [dropTarget, setDropTarget] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  const gridRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent, index: number, type: DragType) => {
    if (type === 'row' && frozenRows.has(index)) return;
    
    const touch = e.touches[0];
    const element = e.currentTarget as HTMLElement;
    
    setTouchDrag({
      active: true,
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      currentY: touch.clientY,
      elementIndex: index,
      dragType: type,
      initialRect: element.getBoundingClientRect(),
    });
  }, [frozenRows]);

  const handleMouseStart = useCallback((e: React.MouseEvent, index: number, type: DragType) => {
    if (type === 'row' && frozenRows.has(index)) return;
    
    e.preventDefault();
    
    setTouchDrag({
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      currentX: e.clientX,
      currentY: e.clientY,
      elementIndex: index,
      dragType: type,
      initialRect: (e.currentTarget as HTMLElement).getBoundingClientRect(),
    });
  }, [frozenRows]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchDrag.active) return;
    e.preventDefault();

    const touch = e.touches[0];
    
    setTouchDrag(prev => ({
      ...prev,
      currentX: touch.clientX,
      currentY: touch.clientY,
    }));

    // Find potential drop target
    const handles = document.querySelectorAll(`[data-handle-type="${touchDrag.dragType}"]`);
    let closestHandle: Element | null = null;
    let minDistance = Infinity;

    handles.forEach(handle => {
      const rect = handle.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = touchDrag.dragType === 'row'
        ? Math.abs(touch.clientY - centerY)
        : Math.abs(touch.clientX - centerX);
        
      if (distance < minDistance) {
        minDistance = distance;
        closestHandle = handle;
      }
    });

    if (closestHandle && minDistance < 30) {
      const handleElement = closestHandle as HTMLElement;
      const index = parseInt(handleElement.dataset.handleIndex ?? '-1', 10);
      if (index !== touchDrag.elementIndex) {
        setDropTarget(index);
      }
    } else {
      setDropTarget(null);
    }
  }, [touchDrag]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!touchDrag.active) return;
    e.preventDefault();
  
    setTouchDrag(prev => ({
      ...prev,
      currentX: e.clientX,
      currentY: e.clientY,
    }));
  
    // Find potential drop target
    const handles = document.querySelectorAll(`[data-handle-type="${touchDrag.dragType}"]`);
    let closestHandle: Element | null = null;
    let minDistance = Infinity;
  
    handles.forEach(handle => {
      const rect = handle.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = touchDrag.dragType === 'row'
        ? Math.abs(e.clientY - centerY)
        : Math.abs(e.clientX - centerX);
        
      if (distance < minDistance) {
        minDistance = distance;
        closestHandle = handle;
      }
    });
  
    if (closestHandle && minDistance < 30) {
      const handleElement = closestHandle as HTMLElement;
      const index = parseInt(handleElement.dataset.handleIndex ?? '-1', 10);
      if (index !== touchDrag.elementIndex) {
        setDropTarget(index);
      }
    } else {
      setDropTarget(null);
    }
  }, [touchDrag]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    e.preventDefault();
    
    if (!touchDrag.active || dropTarget === null) {
      setTouchDrag(initialTouchState);
      setDropTarget(null);
      return;
    }

    const sourceIndex = touchDrag.elementIndex;
    const targetIndex = dropTarget;

    if (sourceIndex !== targetIndex) {
      const newGrid = grid.map(row => [...row]);
      
      if (touchDrag.dragType === 'row') {
        if (!frozenRows.has(sourceIndex) && !frozenRows.has(targetIndex)) {
          // Swap rows
          [newGrid[sourceIndex], newGrid[targetIndex]] = 
            [newGrid[targetIndex], newGrid[sourceIndex]];
          setGrid(newGrid);
          setMoveCount(prev => prev + 1);
        }
      } else if (touchDrag.dragType === 'col') {
        let hasUnfrozenMove = false;
        // Swap columns only for unfrozen rows
        for (let row = 0; row < newGrid.length; row++) {
          if (!frozenRows.has(row)) {
            [newGrid[row][sourceIndex], newGrid[row][targetIndex]] = 
              [newGrid[row][targetIndex], newGrid[row][sourceIndex]];
            hasUnfrozenMove = true;
          }
        }
        if (hasUnfrozenMove) {
          setGrid(newGrid);
          setMoveCount(prev => prev + 1);
        }
      }
    }

    setTouchDrag(initialTouchState);
    setDropTarget(null);
  }, [touchDrag, dropTarget, grid, frozenRows]);

  const handleMouseEnd = useCallback((e: MouseEvent) => {
    e.preventDefault();
    
    if (!touchDrag.active || dropTarget === null) {
      setTouchDrag(initialTouchState);
      setDropTarget(null);
      return;
    }
  
    const sourceIndex = touchDrag.elementIndex;
    const targetIndex = dropTarget;
  
    if (sourceIndex !== targetIndex) {
      const newGrid = grid.map(row => [...row]);
      
      if (touchDrag.dragType === 'row') {
        if (!frozenRows.has(sourceIndex) && !frozenRows.has(targetIndex)) {
          // Swap rows
          [newGrid[sourceIndex], newGrid[targetIndex]] = 
            [newGrid[targetIndex], newGrid[sourceIndex]];
          setGrid(newGrid);
          setMoveCount(prev => prev + 1);
        }
      } else if (touchDrag.dragType === 'col') {
        let hasUnfrozenMove = false;
        // Swap columns only for unfrozen rows
        for (let row = 0; row < newGrid.length; row++) {
          if (!frozenRows.has(row)) {
            [newGrid[row][sourceIndex], newGrid[row][targetIndex]] = 
              [newGrid[row][targetIndex], newGrid[row][sourceIndex]];
            hasUnfrozenMove = true;
          }
        }
        if (hasUnfrozenMove) {
          setGrid(newGrid);
          setMoveCount(prev => prev + 1);
        }
      }
    }
  
    setTouchDrag(initialTouchState);
    setDropTarget(null);
  }, [touchDrag, dropTarget, grid, frozenRows]);

  const handleFlip = useCallback((index: number, type: 'row' | 'col') => {
    if (type === 'row' && frozenRows.has(index)) return;

    const newGrid = grid.map(row => [...row]);
    
    if (type === 'row') {
      newGrid[index] = newGrid[index].reverse();
    } else {
      // For columns, only flip unfrozen rows
      const unfrozenValues: number[] = [];
      const frozenIndices = new Set();
      
      // Collect unfrozen values and mark frozen indices
      for (let i = 0; i < grid.length; i++) {
        if (frozenRows.has(i)) {
          frozenIndices.add(i);
        } else {
          unfrozenValues.push(grid[i][index]);
        }
      }
      
      // Reverse unfrozen values
      const reversedValues = unfrozenValues.reverse();
      let unfrozenIndex = 0;
      
      // Place values back in grid
      for (let i = 0; i < grid.length; i++) {
        if (!frozenIndices.has(i)) {
          newGrid[i][index] = reversedValues[unfrozenIndex++];
        }
      }
    }
    
    setGrid(newGrid);
    setMoveCount(prev => prev + 1);
  }, [grid, frozenRows]);

  // Check for completed rows
  useEffect(() => {
    setFrozenRows(prev => {
      const newFrozen = new Set(prev);
      
      grid.forEach((row, index) => {
        const solutionLetters = SOLUTION[index].map(num => NUMBER_TO_LETTER[num]);
        const rowLetters = row.map(num => NUMBER_TO_LETTER[num]);
  
        const isCorrect = solutionLetters.every(letter => {
          const requiredCount = solutionLetters.filter(l => l === letter).length;
          const actualCount = rowLetters.filter(l => l === letter).length;
          return actualCount >= requiredCount;
        });
  
        if (isCorrect) {
          newFrozen.add(index);
        } else {
          newFrozen.delete(index);
        }
      });
      
      return newFrozen;
    });
  }, [grid]);
  

  // Add touch event listeners
  // Replace your existing useEffect that handles touch events with the following

useEffect(() => {
  if (touchDrag.active) {
    // Touch event listeners
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('touchcancel', handleTouchEnd, { passive: false });

    // Mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseEnd);

    return () => {
      // Remove touch event listeners
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);

      // Remove mouse event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseEnd);
    };
  }
}, [touchDrag.active, handleTouchMove, handleTouchEnd, handleMouseMove, handleMouseEnd]);


  // Visual feedback for touch dragging
  const getDragStyles = useCallback((index: number, type: 'row' | 'col') => {
    if (!touchDrag.active || touchDrag.dragType !== type) return {};
    
    const isSource = index === touchDrag.elementIndex;
    const isTarget = index === dropTarget;
    
    if (isTarget) {
      return {
        opacity: 0.8,
        backgroundColor: 'rgba(59, 130, 246, 0.1)'
      };
    }
    
    return {};
  }, [touchDrag, dropTarget]);

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 pt-32 md:pt-60 p-4 md:p-8">
      <div className="text-center space-y-2 absolute top-9 md:top-16">
        <h1 className="text-8xl md:text-8xl font-bold text-gray-800">Flip</h1>
      </div>
      
      <div className="relative" ref={gridRef}>
        <div className="grid grid-cols-4 gap-px bg-gray-100">
          {grid.map((row, rowIndex) =>
            row.map((num, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                num={num}
                isFrozen={frozenRows.has(rowIndex)}
                isHighlighted={
                  (touchDrag.dragType === 'row' && rowIndex === touchDrag.elementIndex) ||
                  (touchDrag.dragType === 'col' && colIndex === touchDrag.elementIndex)
                }
                isDragTarget={
                  (touchDrag.dragType === 'row' && rowIndex === dropTarget) ||
                  (touchDrag.dragType === 'col' && colIndex === dropTarget)
                }
              />
            ))
          )}
        </div>

        <div className="absolute -left-14 md:-left-24 top-0 space-y-px">
          {grid.map((_, index) => (
            <div 
              key={`row-${index}`} 
              className="touch-none"
            >
              <DragHandle
                index={index}
                type="row"
                isActive={touchDrag.dragType === 'row' && (index === touchDrag.elementIndex || index === dropTarget)}
                isFrozen={frozenRows.has(index)}
                onTouchStart={handleTouchStart}
                onFlip={handleFlip}
                onMouseDown={handleMouseStart}
              />
            </div>
          ))}
        </div>

        <div className="absolute -top-14 md:-top-24 left-0 flex space-x-px">
          {grid[0].map((_, index) => (
            <div 
              key={`col-${index}`}
              className="touch-none"
            >
              <DragHandle
                index={index}
                type="col"
                isActive={touchDrag.dragType === 'col' && (index === touchDrag.elementIndex || index === dropTarget)}
                onTouchStart={handleTouchStart}
                onFlip={handleFlip}
                onMouseDown={handleMouseStart}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm md:text-base text-gray-500 mt-4 md:mt-6">
        Moves: {moveCount} | Completed Rows: {frozenRows.size}
      </div>
      <h2 className="text-base md:text-lg text-gray-600">Theme: Animals</h2>

      <button
        onClick={() => setShowInstructions(true)}
        className="mt-6 text-blue-500 hover:underline"
      >
        How to Play
      </button>

      {/* HowToPlay Modal */}
      {showInstructions && <HowToPlay onClose={() => setShowInstructions(false)} />}
    </div>
  );
};

export default NumberGrid;
