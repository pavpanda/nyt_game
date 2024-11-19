// src/components/HowToPlayAnimationModal/screens/Screen1.tsx

import React, { useEffect } from 'react';
import styles from './Screens.module.css';
import { getRowCenterPosition, getColumnCenterPosition, initialGrid1 } from '../HowToPlayAnimationModal';

interface Screen1Props {
  grid: number[][];
  highlight: { type: 'row' | 'col'; index: number } | null;
  handPosition: { top: number; left: number };
  handColor: string;
  onFlipRow: (rowIndex: number) => void;
  onFlipCol: (colIndex: number) => void;
  onSwapRows: (row1: number, row2: number) => void;
  onSwapColumns: (col1: number, col2: number) => void;
  setHandColor: (color: string) => void;
  setHandPosition: (position: { top: number; left: number }) => void;
  setHighlight: (highlight: { type: 'row' | 'col'; index: number } | null) => void;
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>; // New prop
  setFrozenRows: React.Dispatch<React.SetStateAction<number[]>>; // New prop
}

const Screen1: React.FC<Screen1Props> = ({
  onSwapRows,
  onSwapColumns,
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
      // Swap Rows 0 and 2
      // Step 1: Move hand to Row 0 center and highlight
      async () => {
        await sleep(1000);
        if (isCancelled) return;
        
        console.log('Highlight set to row 0');
        setHandPosition(getRowCenterPosition(0));
        await sleep(1000);
      },
      // Step 2: Turn hand blue to indicate action
      async () => {
        if (isCancelled) return;
        setHandColor('#3b82f6'); // Blue color
        setHighlight({ type: 'row', index: 0 });
        console.log('Hand color changed to blue');
        await sleep(500);
      },
      // Step 3: Move hand to Row 2 center and highlight target row
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'row', index: 2 });
        console.log('Highlight set to row 2');
        setHandPosition(getRowCenterPosition(2));
        await sleep(1000);
      },
      // Step 4: Turn hand normal and execute swap, then unhighlight both rows
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        onSwapRows(0, 2);
        setHighlight(null);
        console.log('Hand color reverted to normal and swapped rows 0 and 2');
        await sleep(1000);
      },
      // Swap Columns 1 and 3
      // Step 5: Move hand to Column 1 center and highlight
      async () => {
        if (isCancelled) return;
        console.log('Highlight set to column 1');
        setHandPosition(getColumnCenterPosition(1));
        setHandColor('#6b7280'); // Ensure hand is normal
        await sleep(1000);
      },
      // Step 6: Turn hand blue to indicate action
      async () => {
        if (isCancelled) return;
        setHandColor('#3b82f6'); // Blue color
        setHighlight({ type: 'col', index: 1 });
        console.log('Hand color changed to blue');
        await sleep(500);
      },
      // Step 7: Move hand to Column 3 center and highlight target column
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'col', index: 3 });
        console.log('Highlight set to column 3');
        setHandPosition(getColumnCenterPosition(3));
        await sleep(1000);
      },
      // Step 8: Turn hand normal and execute swap, then unhighlight both columns
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        onSwapColumns(1, 3);
        setHighlight(null);
        console.log('Hand color reverted to normal and swapped columns 1 and 3');
        await sleep(1000);
      },
      // Final Step: Reset grid and frozenRows
      async () => {
        if (isCancelled) return;
        console.log('Animation steps completed. Resetting grid and frozen rows.');
        setGrid(initialGrid1);
        await sleep(1000);
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
  }, [onSwapRows, onSwapColumns, setHandColor, setHandPosition, setHighlight, setGrid, setFrozenRows]); // Include dependencies

  return (
    <div className={styles.screenContainer}>
      <p className={styles.screenText}>
        Drag rows or columns to swap them.
        This is useful for moving groups of letters around the grid.
      </p>
    </div>
  );
};

export default Screen1;
