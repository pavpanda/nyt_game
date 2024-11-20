// GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { Grid } from '../types/types';
import { SOLUTION, NUMBER_TO_LETTER, SCRAMBLE, GAME_NUMBER } from '../constants/gameConstants';
import { useGridOperations } from '../hooks/useGridOperations';
import ResponsiveGameLayout from './ResponsiveGameLayout';
import WinModal from './WinModal';
import HowToPlayAnimationModal from './HowToPlayAnimationModal/HowToPlayAnimationModal';

const LOCAL_STORAGE_KEY = 'gameState';
const HOW_TO_PLAY_SEEN_KEY = 'howToPlaySeen';
const GAME_NUMBER_KEY = 'gameNumber';

interface SavedGameState {
  grid: Grid;
  moveCount: number;
  frozenRows: number[];
  solvedRowsOrder: [number, number][];
  solvedRowsHistory: Record<number, number>;
}

export const GameBoard: React.FC = () => {
  // Function to load the initial game state
  const loadInitialState = (): SavedGameState | null => {
    const storedGameNumber = localStorage.getItem(GAME_NUMBER_KEY);
    // console.log(`Stored Game Number: ${storedGameNumber}`);
    // console.log(`Current GAME_NUMBER: ${GAME_NUMBER}`);

    // Check if the stored game number matches the current GAME_NUMBER
    if (storedGameNumber !== GAME_NUMBER.toString()) {
      // console.log('Game number mismatch. Resetting game state.');

      // Remove specific keys instead of clearing entire localStorage
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      localStorage.removeItem(HOW_TO_PLAY_SEEN_KEY);
      
      // Update the GAME_NUMBER in localStorage
      localStorage.setItem(GAME_NUMBER_KEY, GAME_NUMBER.toString());

      return null; // Return null to initialize with default values
    }

    // Retrieve the saved game state
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed: SavedGameState = JSON.parse(saved);
        // console.log('Loaded saved game state:', parsed);
        return parsed;
      } catch (error) {
        console.error('Error parsing saved game state:', error);
        return null;
      }
    }

    // If no saved state exists
    return null;
  };

  // Initialize state variables
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
  const [showHowToPlayAnimation, setShowHowToPlayAnimation] = useState<boolean>(false);

  const { handleFlip } = useGridOperations(
    grid,
    frozenRows,
    setGrid,
    setMoveCount
  );

  // Effect to save game state to localStorage whenever relevant state changes
  useEffect(() => {
    const savedState: SavedGameState = {
      grid,
      moveCount,
      frozenRows: Array.from(frozenRows),
      solvedRowsOrder: Array.from(solvedRowsOrder.entries()),
      solvedRowsHistory,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedState));
    // console.log('Game state saved:', savedState);
  }, [grid, moveCount, frozenRows, solvedRowsOrder, solvedRowsHistory]);

  // Effect to update frozen rows based on correctness
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
            // console.log(`Row ${index} solved in ${moveCount} moves.`);
          }
        }
      });
      return newFrozen;
    });
  }, [grid, moveCount]);

  // Effect to show win modal if all rows are frozen
  useEffect(() => {
    if (Object.keys(solvedRowsHistory).length > 0 && frozenRows.size === grid.length) {
      // console.log('All rows solved. Showing win modal.');
      setShowWinModal(true);
    }
  }, [frozenRows, solvedRowsHistory, grid.length]);

  // Effect to show How To Play animation if not seen
  useEffect(() => {
    const hasSeen = localStorage.getItem(HOW_TO_PLAY_SEEN_KEY);
    if (!hasSeen) {
      // console.log('Showing How To Play animation.');
      setShowHowToPlayAnimation(true);
      localStorage.setItem(HOW_TO_PLAY_SEEN_KEY, 'true');
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-4">
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
          solution={SOLUTION}
        />
      </div>
      {showWinModal && (
        <WinModal
          onClose={() => setShowWinModal(false)}
          solvedRowsHistory={solvedRowsHistory}
        />
      )}
      {showHowToPlayAnimation && (
        <HowToPlayAnimationModal onClose={() => setShowHowToPlayAnimation(false)} />
      )}
    </>
  );
};

export default GameBoard;
