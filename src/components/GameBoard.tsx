// GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion
} from 'firebase/firestore';

import { Grid } from '../types/types';
import { SOLUTION, NUMBER_TO_LETTER, SCRAMBLE, GAME_NUMBER } from '../constants/gameConstants';
import { useGridOperations } from '../hooks/useGridOperations';
import ResponsiveGameLayout from './ResponsiveGameLayout';
import WinModal from './WinModal';
import HowToPlayAnimationModal from './HowToPlayAnimationModal/HowToPlayAnimationModal';

const LOCAL_STORAGE_KEY = 'gameState';
const HOW_TO_PLAY_SEEN_KEY = 'howToPlaySeen';
const GAME_NUMBER_KEY = 'gameNumber';

// SINGLE-BRANCH KEYS
const ACTIVE_BRANCH_KEY = 'activeBranch';
const PENDING_SCORE_KEY = 'pendingScore';

interface SavedGameState {
  grid: Grid;
  moveCount: number;
  frozenRows: number[];
  solvedRowsOrder: [number, number][];
  solvedRowsHistory: Record<number, number>;
}

export const GameBoard: React.FC = () => {
  const { branchId: routeBranchId } = useParams<string>();
  const db = getFirestore();

  // If we have a branch in the URL, that overrides any stored branch.
  // Otherwise, fall back to what's in localStorage, or blank if none.
  const storedActiveBranch = localStorage.getItem(ACTIVE_BRANCH_KEY) || '';
  const activeBranch = routeBranchId || storedActiveBranch;

  // If route changes, overwrite the localStorage with the new route-based branch.
  useEffect(() => {
    if (routeBranchId) {
      localStorage.setItem(ACTIVE_BRANCH_KEY, routeBranchId);
    }
  }, [routeBranchId]);

  // Function to load the initial game state from localStorage
  const loadInitialState = (): SavedGameState | null => {
    const storedGameNumber = localStorage.getItem(GAME_NUMBER_KEY);
    if (storedGameNumber !== GAME_NUMBER.toString()) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      localStorage.removeItem(HOW_TO_PLAY_SEEN_KEY);
      localStorage.setItem(GAME_NUMBER_KEY, GAME_NUMBER.toString());
      return null;
    }
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved) as SavedGameState;
      } catch (error) {
        console.error('Error parsing saved game state:', error);
        return null;
      }
    }
    return null;
  };

  const initialState = loadInitialState();

  const [grid, setGrid] = useState<Grid>(() => initialState?.grid || SCRAMBLE);
  const [moveCount, setMoveCount] = useState<number>(() => initialState?.moveCount || 0);
  const [frozenRows, setFrozenRows] = useState<Set<number>>(
    () => new Set(initialState?.frozenRows || [])
  );
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

  const { handleFlip } = useGridOperations(grid, frozenRows, setGrid, setMoveCount);

  // Save game state whenever relevant changes occur
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

  // Check correctness of rows
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
            setSolvedRowsHistory((curr) => ({ ...curr, [index]: moveCount }));
            setSolvedRowsOrder((curr) => new Map(curr).set(index, moveCount));
          }
        }
      });
      return newFrozen;
    });
  }, [grid, moveCount]);

  // If puzzle is solved, show Win Modal
  useEffect(() => {
    if (frozenRows.size === grid.length && Object.keys(solvedRowsHistory).length > 0) {
      setShowWinModal(true);
      localStorage.setItem(PENDING_SCORE_KEY, moveCount.toString());
    }
  }, [frozenRows, solvedRowsHistory, grid.length, moveCount]);

  // Show how-to-play animation if not seen
  useEffect(() => {
    const hasSeen = localStorage.getItem(HOW_TO_PLAY_SEEN_KEY);
    if (!hasSeen) {
      setShowHowToPlayAnimation(true);
      localStorage.setItem(HOW_TO_PLAY_SEEN_KEY, 'true');
    }
  }, []);

  // Helper: Submit a score to a specific branch
  const submitScoreToBranch = async (branch: string, nickname: string, moves: number) => {
    if (!branch) return;
    const docRef = doc(db, 'scores', branch);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      await setDoc(docRef, {
        scores: [{ nickname, moves, date: new Date().toISOString() }],
      });
    } else {
      await updateDoc(docRef, {
        scores: arrayUnion({
          nickname,
          moves,
          date: new Date().toISOString(),
        }),
      });
    }
  };

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
          // Pass the single active branch to the layout
          currentBranch={activeBranch || undefined}
        />
      </div>

      {showWinModal && (
        <WinModal
          onClose={() => setShowWinModal(false)}
          solvedRowsHistory={solvedRowsHistory}
          currentBranch={activeBranch || undefined}
          onSubmitScoreToBranch={submitScoreToBranch}
        />
      )}

      {showHowToPlayAnimation && (
        <HowToPlayAnimationModal onClose={() => setShowHowToPlayAnimation(false)} />
      )}
    </>
  );
};

export default GameBoard;
