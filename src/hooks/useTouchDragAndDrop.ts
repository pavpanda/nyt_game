import { useState, useCallback, useEffect, useRef } from 'react';
import { Grid } from '../types/types';

interface DragState {
  sourceRow: number | null;
  sourceCol: number | null;
  isDragging: boolean;
  direction: 'horizontal' | 'vertical' | null;
  targetIndex: number | null;
  startX: number | null;
  startY: number | null;
  gridOffsetLeft: number;
  gridOffsetTop: number;
  highlightedIndices: number[];
  dragOffset: {
    x: number;
    y: number;
  };
}

export const useTouchDragAndDrop = (
  grid: Grid,
  frozenRows: Set<number>,
  setGrid: (grid: Grid) => void,
  setMoveCount: React.Dispatch<React.SetStateAction<number>>,
  cellWidth: number,
  cellHeight: number,
  gridRef: React.RefObject<HTMLDivElement>,
  gapSize: number
) => {
  const [dragState, setDragState] = useState<DragState>({
    sourceRow: null,
    sourceCol: null,
    isDragging: false,
    direction: null,
    targetIndex: null,
    startX: null,
    startY: null,
    gridOffsetLeft: 0,
    gridOffsetTop: 0,
    highlightedIndices: [],
    dragOffset: { x: 0, y: 0 },
  });

  // Use refs to track the latest position without triggering re-renders
  const dragPositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  
  const updateDragPosition = useCallback((x: number, y: number) => {
    dragPositionRef.current = { x, y };
    
    // Cancel any existing animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    // Schedule the state update in the next animation frame
    rafRef.current = requestAnimationFrame(() => {
      setDragState(prevState => {
        if (!prevState.isDragging || !prevState.startX || !prevState.startY) {
          return prevState;
        }

        const deltaX = dragPositionRef.current.x - prevState.startX;
        const deltaY = dragPositionRef.current.y - prevState.startY;
        const threshold = 10;

        let newDirection = prevState.direction;
        let newDragOffset = { ...prevState.dragOffset };

        if (!prevState.direction) {
          if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
            newDirection = 'horizontal';
          } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > threshold) {
            newDirection = 'vertical';
          }
        }

        if (newDirection) {
          newDragOffset = {
            x: newDirection === 'horizontal' ? deltaX : 0,
            y: newDirection === 'vertical' ? deltaY : 0,
          };

          const totalCellWidth = cellWidth + gapSize;
          const totalCellHeight = cellHeight + gapSize;

          const relativeX = dragPositionRef.current.x - prevState.gridOffsetLeft;
          const relativeY = dragPositionRef.current.y - prevState.gridOffsetTop;

          let currentCol = Math.floor(relativeX / totalCellWidth);
          let currentRow = Math.floor(relativeY / totalCellHeight);

          const maxColIndex = grid[0].length - 1;
          const maxRowIndex = grid.length - 1;

          const clampedCol = Math.max(0, Math.min(currentCol, maxColIndex));
          const clampedRow = Math.max(0, Math.min(currentRow, maxRowIndex));

          if (newDirection === 'horizontal') {
            if (prevState.sourceRow !== clampedRow) return prevState;
            return {
              ...prevState,
              targetIndex: clampedCol,
              direction: newDirection,
              highlightedIndices: [prevState.sourceCol!, clampedCol],
              dragOffset: newDragOffset,
            };
          } else {
            if (prevState.sourceCol !== clampedCol || frozenRows.has(clampedRow)) {
              return prevState;
            }
            return {
              ...prevState,
              targetIndex: clampedRow,
              direction: newDirection,
              highlightedIndices: [prevState.sourceRow!, clampedRow],
              dragOffset: newDragOffset,
            };
          }
        }

        return {
          ...prevState,
          direction: newDirection,
          dragOffset: newDragOffset,
        };
      });
    });
  }, [grid, cellWidth, cellHeight, gapSize, frozenRows]);

  const handleDragStart = useCallback(
    (x: number, y: number, rowIndex: number, colIndex: number) => {
      if (frozenRows.has(rowIndex)) return;

      const rect = gridRef.current?.getBoundingClientRect();
      const gridOffsetLeft = rect?.left ?? 0;
      const gridOffsetTop = rect?.top ?? 0;

      setDragState({
        sourceRow: rowIndex,
        sourceCol: colIndex,
        isDragging: true,
        direction: null,
        targetIndex: null,
        startX: x,
        startY: y,
        gridOffsetLeft,
        gridOffsetTop,
        highlightedIndices: [],
        dragOffset: { x: 0, y: 0 },
      });
    },
    [frozenRows, gridRef]
  );

  const handleDragEnd = useCallback(() => {
    if (!dragState.isDragging) return;

    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const { sourceRow, sourceCol, direction, targetIndex } = dragState;

    if (direction === 'horizontal' && sourceCol !== null && targetIndex !== null) {
      if (sourceCol !== targetIndex) {
        const newGrid = grid.map((row, rowIndex) => {
          if (frozenRows.has(rowIndex)) return row;
          const newRow = [...row];
          [newRow[sourceCol], newRow[targetIndex]] = [
            newRow[targetIndex],
            newRow[sourceCol],
          ];
          return newRow;
        });
        setGrid(newGrid);
        setMoveCount((prev) => prev + 1);
      }
    } else if (
      direction === 'vertical' &&
      sourceRow !== null &&
      targetIndex !== null
    ) {
      if (
        sourceRow !== targetIndex &&
        !frozenRows.has(sourceRow) &&
        !frozenRows.has(targetIndex)
      ) {
        const newGrid = [...grid];
        [newGrid[sourceRow], newGrid[targetIndex]] = [
          newGrid[targetIndex],
          newGrid[sourceRow],
        ];
        setGrid(newGrid);
        setMoveCount((prev) => prev + 1);
      }
    }

    setDragState({
      sourceRow: null,
      sourceCol: null,
      isDragging: false,
      direction: null,
      targetIndex: null,
      startX: null,
      startY: null,
      gridOffsetLeft: 0,
      gridOffsetTop: 0,
      highlightedIndices: [],
      dragOffset: { x: 0, y: 0 },
    });
  }, [dragState, grid, setGrid, setMoveCount, frozenRows]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragState.isDragging) {
        updateDragPosition(e.clientX, e.clientY);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (dragState.isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        updateDragPosition(touch.clientX, touch.clientY);
      }
    };

    const cleanup = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      cleanup();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [dragState.isDragging, updateDragPosition, handleDragEnd]);

  return {
    handleDragStart,
    dragState,
  };
};