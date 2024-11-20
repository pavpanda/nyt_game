// src/components/HowToPlayAnimationModal/screens/Screen3.tsx

import React, { useEffect, useRef } from 'react';
import styles from './Screens.module.css';
import { getFlipButtonPosition, initialGrid3 } from '../HowToPlayAnimationModal';

interface Screen3Props {
  grid: number[][];
  highlight: { type: 'row' | 'col'; index: number } | null;
  handPosition: { top: number; left: number };
  handColor: string;
  onFlipRow: (rowIndex: number) => void;
  onFlipCol: (colIndex: number) => void;
  setHandColor: (color: string) => void;
  setHandPosition: (position: { top: number; left: number }) => void;
  setHighlight: (highlight: { type: 'row' | 'col'; index: number } | null) => void;
  frozenRows: number[];
  setFrozenRows: React.Dispatch<React.SetStateAction<number[]>>;
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
}

const Screen3: React.FC<Screen3Props> = ({
  onFlipRow,
  onFlipCol,
  setHandColor,
  setHandPosition,
  setHighlight,
  setFrozenRows,
  setGrid,
}) => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Refs to hold stable references to onFlipRow and onFlipCol
  const onFlipRowRef = useRef(onFlipRow);
  const onFlipColRef = useRef(onFlipCol);

  // Update refs whenever onFlipRow or onFlipCol changes
  useEffect(() => {
    onFlipRowRef.current = onFlipRow;
    onFlipColRef.current = onFlipCol;
  }, [onFlipRow, onFlipCol]);

  useEffect(() => {
    let isCancelled = false;

    const animationSteps = async () => {
      // Step 1: Move hand to Row 3 flip button
      await sleep(50);
      if (isCancelled) return;
      setHandColor('#6b7280'); // Normal color
      const buttonPos = getFlipButtonPosition('row', 1);
      setHandPosition(buttonPos);
      // console.log('Hand moved to Row 2 flip button');
      
      // Step 2: Turn hand blue and highlight
      await sleep(1000);
      if (isCancelled) return;
      setHighlight({ type: 'row', index: 1 });
      setHandColor('#3b82f6'); // Blue color
      onFlipRowRef.current(1); // Use ref to call the latest onFlipRow
      // console.log('Hand color changed to blue and Row 2 highlighted');
      // Step 4: Mark row as frozen
      await sleep(100);
      setHandColor('#6b7280'); // Normal color

      if (isCancelled) return;
      setHighlight(null);
      setFrozenRows((prev) => {
        if (!prev.includes(1)) {
          return [...prev, 1];
        }
        return prev;
      });
      // console.log('Row 2 marked as frozen');

      // Step 5: Reset grid for next iteration (if needed)
      await sleep(1000);
      if (isCancelled) return;
      setGrid(initialGrid3);
      // Removed: setFrozenRows([]); // Keep the row frozen
      setHandPosition(getFlipButtonPosition('row', 2));
      setHandColor('#6b7280'); // Ensure hand is normal
      setHighlight(null);
      setFrozenRows([]);
      // console.log('Grid reset for next iteration without unfreezing rows');

      await sleep(2000);
    };

    const runAnimations = async () => {
      while (!isCancelled) {
        await animationSteps();
      }
      setHighlight(null);
      setFrozenRows([]);
    };

    runAnimations();

    return () => {
      // console.log("Animation cancelled");
      isCancelled = true;
    };
  }, [setHandColor, setHandPosition, setHighlight, setGrid, setFrozenRows]); // Removed onFlipRow and onFlipCol

  return (
    <div className={styles.screenContainer}>
      <p className={styles.screenText}>
        <strong>Solved rows:</strong> Once you solve a row, it freezes and won't change during further swaps or flips.
      </p>
    </div>
  );
};

export default Screen3;
