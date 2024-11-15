// GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { Grid } from '../types/types';
import { SOLUTION, NUMBER_TO_LETTER, SCRAMBLE } from '../constants/gameConstants';
import { useGridOperations } from '../hooks/useGridOperations';
import ResponsiveGameLayout from './ResponsiveGameLayout';
import WinModal from './WinModal';

const LOCAL_STORAGE_KEY = 'gameState';

interface SavedGameState {
  grid: Grid;
  moveCount: number;
  frozenRows: number[];
  solvedRowsOrder: [number, number][];
  solvedRowsHistory: Record<number, number>;
}

export const GameBoard: React.FC = () => {
  const loadInitialState = (): SavedGameState | null => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed: SavedGameState = JSON.parse(saved);
        return parsed;
      } catch {
        return null;
      }
    }
    return null;
  };

  const initialState = loadInitialState();

  const [grid, setGrid] = useState<Grid>(() => initialState?.grid || SCRAMBLE);
  const [moveCount, setMoveCount] = useState<number>(() => initialState?.moveCount || 0);
  const [frozenRows, setFrozenRows] = useState<Set<number>>(() => new Set(initialState?.frozenRows || []));
  const [solvedRowsOrder, setSolvedRowsOrder] = useState<Map<number, number>>(() => {
    const map = new Map<number, number>();
    initialState?.solvedRowsOrder.forEach(([key, value]) => map.set(key, value));
    return map;
  });
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showWinModal, setShowWinModal] = useState<boolean>(false);
  const [solvedRowsHistory, setSolvedRowsHistory] = useState<Record<number, number>>(
    () => initialState?.solvedRowsHistory || {}
  );

  const { handleFlip } = useGridOperations(
    grid,
    frozenRows,
    setGrid,
    setMoveCount
  );

  useEffect(() => {
    const savedState: SavedGameState = {
      grid,
      moveCount,
      frozenRows: Array.from(frozenRows),
      solvedRowsOrder: Array.from(solvedRowsOrder.entries()),
      solvedRowsHistory,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedState));
  }, [grid, moveCount, frozenRows, solvedRowsOrder, solvedRowsHistory]);

  useEffect(() => {
    setFrozenRows((prev) => {
      const newFrozen = new Set<number>();
      grid.forEach((row, index) => {
        const solutionRow = SOLUTION[index];
        const isCorrect = row.every(
          (num, i) => NUMBER_TO_LETTER[num] === NUMBER_TO_LETTER[solutionRow[i]]
        );
        if (isCorrect) {
          newFrozen.add(index);
          if (!prev.has(index)) {
            setSolvedRowsHistory((current) => ({
              ...current,
              [index]: moveCount,
            }));
            setSolvedRowsOrder((current) => new Map(current).set(index, moveCount));
          }
        }
      });
      return newFrozen;
    });
  }, [grid, moveCount]);

  useEffect(() => {
    if (Object.keys(solvedRowsHistory).length > 0) {
      if (frozenRows.size === grid.length) {
        setShowWinModal(true);
      }
    }
  }, [frozenRows, solvedRowsHistory, grid.length]);

  return (
    <>
      <ResponsiveGameLayout
        grid={grid}
        frozenRows={frozenRows}
        solvedRowsOrder={solvedRowsOrder}
        moveCount={moveCount}
        showInstructions={showInstructions}
        onShowInstructions={() => setShowInstructions(true)}
        onCloseInstructions={() => setShowInstructions(false)}
        onFlip={handleFlip}
        setGrid={setGrid}
        setMoveCount={setMoveCount}
        showWinModal={showWinModal}
        onCloseWinModal={() => setShowWinModal(false)}
      />
      {showWinModal && (
        <WinModal
          onClose={() => setShowWinModal(false)}
          solvedRowsHistory={solvedRowsHistory}
        />
      )}
    </>
  );
};

export default GameBoard;
