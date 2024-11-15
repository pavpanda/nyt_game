import { useState, useCallback, useEffect } from 'react';
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
  });

  const handleDragStart = useCallback(
    (x: number, y: number, rowIndex: number, colIndex: number) => {
      if (frozenRows.has(rowIndex)) return; // Prevent starting drag from a frozen row

      let gridOffsetLeft = 0;
      let gridOffsetTop = 0;

      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        gridOffsetLeft = rect.left;
        gridOffsetTop = rect.top;
      }

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
      });
    },
    [frozenRows, gridRef]
  );

  const handleGlobalMove = useCallback(
    (x: number, y: number) => {
      setDragState((prevState) => {
        if (
          !prevState.isDragging ||
          prevState.startX === null ||
          prevState.startY === null ||
          prevState.sourceRow === null ||
          prevState.sourceCol === null
        ) {
          return prevState;
        }

        const deltaX = x - prevState.startX!;
        const deltaY = y - prevState.startY!;
        const threshold = 10;

        let newDirection = prevState.direction;

        if (!prevState.direction) {
          if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
            newDirection =
              Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
          }
        }

        if (newDirection) {
          const totalCellWidth = cellWidth + gapSize;
          const totalCellHeight = cellHeight + gapSize;

          const relativeX = x - prevState.gridOffsetLeft;
          const relativeY = y - prevState.gridOffsetTop;

          const currentCol = Math.floor(relativeX / totalCellWidth);
          const currentRow = Math.floor(relativeY / totalCellHeight);

          const maxColIndex = grid[0].length - 1;
          const maxRowIndex = grid.length - 1;

          const clampedCol = Math.max(0, Math.min(currentCol, maxColIndex));
          const clampedRow = Math.max(0, Math.min(currentRow, maxRowIndex));

          if (newDirection === 'horizontal') {
            if (prevState.sourceRow !== clampedRow) {
              return prevState;
            }
            return {
              ...prevState,
              targetIndex: clampedCol,
              direction: newDirection,
              highlightedIndices: [prevState.sourceCol!, clampedCol],
            };
          } else {
            if (prevState.sourceCol !== clampedCol) {
              return prevState;
            }
            if (frozenRows.has(clampedRow)) {
              return prevState;
            }
            return {
              ...prevState,
              targetIndex: clampedRow,
              direction: newDirection,
              highlightedIndices: [prevState.sourceRow!, clampedRow],
            };
          }
        }

        return {
          ...prevState,
          direction: newDirection,
        };
      });
    },
    [grid, cellWidth, cellHeight, gapSize, frozenRows]
  );

  const handleDragEnd = useCallback(() => {
    if (!dragState.isDragging) return;

    const { sourceRow, sourceCol, direction, targetIndex } = dragState;

    if (direction === 'horizontal' && sourceCol !== null && targetIndex !== null) {
      if (sourceCol !== targetIndex) {
        const newGrid = grid.map((row, rowIndex) => {
          const newRow = [...row];
          if (!frozenRows.has(rowIndex)) {
            [newRow[sourceCol], newRow[targetIndex]] = [
              newRow[targetIndex],
              newRow[sourceCol],
            ];
          }
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
    });
  }, [dragState, grid, setGrid, setMoveCount, frozenRows]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragState.isDragging) {
        handleGlobalMove(e.clientX, e.clientY);
      }
    };

    const onMouseUp = () => {
      if (dragState.isDragging) {
        handleDragEnd();
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (dragState.isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        handleGlobalMove(touch.clientX, touch.clientY);
      }
    };

    const onTouchEnd = () => {
      if (dragState.isDragging) {
        handleDragEnd();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [dragState.isDragging, handleGlobalMove, handleDragEnd]);

  return {
    handleDragStart,
    dragState,
  };
};
