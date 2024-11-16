import React, { useState, useEffect } from 'react';
import { Grid } from '../types/types';
import { SOLUTION, NUMBER_TO_LETTER, SCRAMBLE } from '../constants/gameConstants';
import { useGridOperations } from '../hooks/useGridOperations';
import ResponsiveGameLayout from './ResponsiveGameLayout';
import WinModal from './WinModal';
import HowToPlayAnimationModal from './HowToPlayAnimationModal/HowToPlayAnimationModal';

const LOCAL_STORAGE_KEY = 'gameState';
const HOW_TO_PLAY_SEEN_KEY = 'howToPlaySeen';
const LAST_LOGIN_KEY = 'lastLoginDate';

interface SavedGameState {
  grid: Grid;
  moveCount: number;
  frozenRows: number[];
  solvedRowsOrder: [number, number][];
  solvedRowsHistory: Record<number, number>;
}

const isNewDay = (): boolean => {
  const lastLogin = localStorage.getItem(LAST_LOGIN_KEY);
  if (!lastLogin) return true;

  const lastLoginDate = new Date(lastLogin);
  const now = new Date();
  
  // Convert both dates to ET
  const etOffset = -4; // EDT offset from UTC in hours
  const lastLoginET = new Date(lastLoginDate.getTime() + etOffset * 60 * 60 * 1000);
  const nowET = new Date(now.getTime() + etOffset * 60 * 60 * 1000);
  
  // Set time to 9 AM ET for comparison
  const lastLoginDay = new Date(lastLoginET);
  lastLoginDay.setHours(9, 0, 0, 0);
  
  const nowDay = new Date(nowET);
  nowDay.setHours(9, 0, 0, 0);
  
  return nowDay > lastLoginDay;
};

export const GameBoard: React.FC = () => {
  const loadInitialState = (): SavedGameState | null => {
    // Check if it's a new day after 9 AM ET
    if (isNewDay()) {
      localStorage.clear();
      localStorage.setItem(LAST_LOGIN_KEY, new Date().toISOString());
      return null;
    }
    
    // Update last login time
    localStorage.setItem(LAST_LOGIN_KEY, new Date().toISOString());
    
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
  const [showHowToPlayAnimation, setShowHowToPlayAnimation] = useState<boolean>(false);

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

  useEffect(() => {
    const hasSeen = localStorage.getItem(HOW_TO_PLAY_SEEN_KEY);
    if (!hasSeen) {
      setShowHowToPlayAnimation(true);
      localStorage.setItem(HOW_TO_PLAY_SEEN_KEY, 'true');
    }
  }, []);

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
      {showHowToPlayAnimation && (
        <HowToPlayAnimationModal onClose={() => setShowHowToPlayAnimation(false)} />
      )}
    </>
  );
};

export default GameBoard;