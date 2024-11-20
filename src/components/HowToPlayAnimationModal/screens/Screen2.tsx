// src/components/HowToPlayAnimationModal/screens/Screen2.tsx

import React, { useEffect } from 'react';
import styles from './Screens.module.css';
import { getFlipButtonPosition, initialGrid2 } from '../HowToPlayAnimationModal';

interface Screen2Props {
  grid: number[][];
  highlight: { type: 'row' | 'col'; index: number } | null;
  handPosition: { top: number; left: number };
  handColor: string;
  onFlipRow: (rowIndex: number) => void;
  onFlipCol: (colIndex: number) => void;
  setHandColor: (color: string) => void;
  setHandPosition: (position: { top: number; left: number }) => void;
  setHighlight: (highlight: { type: 'row' | 'col'; index: number } | null) => void;
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>; // New prop
  setFrozenRows: React.Dispatch<React.SetStateAction<number[]>>; // New prop
}

const Screen2: React.FC<Screen2Props> = ({
  onFlipRow,
  onFlipCol,
  setHandColor,
  setHandPosition,
  setHighlight,
  setGrid,
  setFrozenRows,
}) => {
  // Sleep utility
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let isCancelled = false;

    const animationSteps = [
      // Step 1: Move hand to Row 3 flip button
      async () => {
        await sleep(50);
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        const buttonPos = getFlipButtonPosition('row', 2);
        setHandPosition(buttonPos);
        // console.log('Highlight set to row 2');
        await sleep(1000);
      },
      // Step 2: Turn hand blue
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'row', index: 2 });
        setHandColor('#3b82f6'); // Blue color
        onFlipRow(2);
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      // Step 3: Turn hand back to normal
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        // console.log('Hand color reverted to normal');
        await sleep(500);
      },
      // Step 5: Move hand to Column 1 flip button
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Ensure hand is normal
        const buttonPos = getFlipButtonPosition('col', 0);
        setHandPosition(buttonPos);
        // console.log('Highlight set to column 0');
        await sleep(1000);
      },
      // Step 6: Turn hand blue
      async () => {
        if (isCancelled) return;
        setHandColor('#3b82f6'); // Blue color
        setHighlight({ type: 'col', index: 0 });
        onFlipCol(0);
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      // Step 7: Turn hand back to normal
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        // console.log('Hand color reverted to normal');
        await sleep(500);
      },
      // Final Step: Reset grid and frozenRows
      async () => {
        if (isCancelled) return;
        // console.log('Animation steps completed. Resetting grid and frozen rows.');
        setGrid(initialGrid2);
        await sleep(2000);
      },
    ];

    const runAnimations = async () => {
      while (!isCancelled) {
        for (let step = 0; step < animationSteps.length; step++) {
          if (isCancelled) break;
          await animationSteps[step]();
        }
      }
    };

    runAnimations();

    return () => {
      isCancelled = true;
    };
  }, [onFlipRow, onFlipCol, setHandColor, setHandPosition, setHighlight, setGrid, setFrozenRows]); // Include dependencies

  return (
    <div className={styles.screenContainer}>
      <p className={styles.screenText}>
        <strong>Flipping:</strong> Click on the outer buttons to flip a row or column.
        This is useful for positioning letters.
      </p>
    </div>
  );
};

export default Screen2;
