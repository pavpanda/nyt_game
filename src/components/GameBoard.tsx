// GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { Grid } from '../types/types';
import { SOLUTION, NUMBER_TO_LETTER, SCRAMBLE } from '../constants/gameConstants';
import { scrambleGrid } from '../utils/gridUtils';
import { useGridOperations } from '../hooks/useGridOperations';
import ResponsiveGameLayout from './ResponsiveGameLayout';
import WinModal from './WinModal';

export const GameBoard = () => {
  // const [grid, setGrid] = useState<Grid>(() => scrambleGrid(SOLUTION));
  
  const [grid, setGrid] = useState<Grid>(() => SCRAMBLE);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [frozenRows, setFrozenRows] = useState<Set<number>>(new Set());
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showWinModal, setShowWinModal] = useState<boolean>(false);
  const [solvedRowsHistory, setSolvedRowsHistory] = useState<number[]>([]);

  const { handleFlip } = useGridOperations(
    grid,
    frozenRows,
    setGrid,
    setMoveCount
  );

  // Update frozenRows whenever the grid changes
  useEffect(() => {
    setFrozenRows((prev) => {
      const newFrozen = new Set<number>();

      grid.forEach((row, index) => {
        const solutionRow = SOLUTION[index];
        const isCorrect = row.every(
          (num, i) =>
            NUMBER_TO_LETTER[num] === NUMBER_TO_LETTER[solutionRow[i]]
        );

        if (isCorrect) {
          newFrozen.add(index);
        }
      });

      return newFrozen;
    });
  }, [grid]);

  // Update solvedRowsHistory and check for win condition whenever frozenRows changes
  useEffect(() => {
    if (moveCount > 0) {
      // Update the solvedRowsHistory after frozenRows changes
      setSolvedRowsHistory((prev) => [...prev, frozenRows.size]);

      // Check if the game is won
      if (frozenRows.size === grid.length) {
        setShowWinModal(true);
      }
    }
  }, [frozenRows]);

  return (
    <>
      <ResponsiveGameLayout
        grid={grid}
        frozenRows={frozenRows}
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
