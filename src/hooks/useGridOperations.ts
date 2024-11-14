import { useCallback } from 'react';
import { Grid } from '../types/types';

export const useGridOperations = (
  grid: Grid,
  frozenRows: Set<number>,
  setGrid: (grid: Grid) => void,
  setMoveCount: React.Dispatch<React.SetStateAction<number>>
) => {
  const handleFlip = useCallback(
    (index: number, type: 'row' | 'col') => {
      if (type === 'row') {
        if (frozenRows.has(index)) return;
        const newGrid = [...grid];
        newGrid[index] = [...newGrid[index]].reverse();
        setGrid(newGrid);
        setMoveCount((prev) => prev + 1);
      } else if (type === 'col') {
        const newGrid = grid.map((row) => [...row]);
        // Get indices of non-frozen rows
        const nonFrozenRowIndices = newGrid
          .map((_, i) => i)
          .filter((i) => !frozenRows.has(i));
        // Get the values from non-frozen rows
        const colValues = nonFrozenRowIndices
          .map((i) => newGrid[i][index])
          .reverse();
        // Assign back the reversed values to the non-frozen rows
        nonFrozenRowIndices.forEach((i, idx) => {
          newGrid[i][index] = colValues[idx];
        });
        setGrid(newGrid);
        setMoveCount((prev) => prev + 1);
      }
    },
    [grid, frozenRows, setGrid, setMoveCount]
  );

  return {
    handleFlip,
  };
};
