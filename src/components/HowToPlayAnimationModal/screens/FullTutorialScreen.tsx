// src/components/HowToPlayAnimationModal/screens/Screen4.tsx

import React, { useEffect, useRef, useState } from 'react';
import styles from './Screens.module.css';
import {
  getFlipButtonPosition,
  getRowCenterPosition,
  getColumnCenterPosition,
  fullGrid,
} from '../HowToPlayAnimationModal';

interface Screen4Props {
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
  frozenRows: number[];
  setFrozenRows: React.Dispatch<React.SetStateAction<number[]>>;
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
}

const FullTutorialScreen: React.FC<Screen4Props> = ({
  grid,
  highlight,
  handPosition,
  handColor,
  onFlipRow,
  onFlipCol,
  onSwapRows,
  onSwapColumns,
  setHandColor,
  setHandPosition,
  setHighlight,
  frozenRows,
  setFrozenRows,
  setGrid,
}) => {
  const [narration, setNarration] = useState<string>('');
  const narrationRef = useRef<string>('');

  // Refs to hold stable references to onFlipRow and onFlipCol
  const onFlipRowRef = useRef(onFlipRow);
  const onFlipColRef = useRef(onFlipCol);
  const onSwapRowsRef = useRef(onSwapRows);
  const onSwapColumnsRef = useRef(onSwapColumns);

  // Update refs whenever the functions change
  useEffect(() => {
    onFlipRowRef.current = onFlipRow;
    onFlipColRef.current = onFlipCol;
    onSwapRowsRef.current = onSwapRows;
    onSwapColumnsRef.current = onSwapColumns;
  }, [onFlipRow, onFlipCol, onSwapRows, onSwapColumns]);

  // Sleep utility
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let isCancelled = false;

    // Function to update narration safely
    const updateNarration = (text: string) => {
      if (!isCancelled) {
        setNarration(text);
        narrationRef.current = text;
      }
    };

    const animationSteps = [
      async () => {
        updateNarration("I see the word 'BEAR' hidden in the second row!");
        await sleep(3000);
      },
      async () => {
        updateNarration("Let's make 'BEAR' by swapping columns.");
        await sleep(3000);
      },
      // Swap Columns 1 and 3
      async () => {
        await sleep(50);
        if (isCancelled) return;
        setHandPosition(getColumnCenterPosition(0));
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#3b82f6'); // Blue color
        setHighlight({ type: 'col', index: 0 });
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'col', index: 2 });
        // console.log('Highlight set to column 2');
        setHandPosition(getColumnCenterPosition(2));
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        onSwapColumnsRef.current(0, 2);
        setHighlight(null);
        // console.log('Hand color reverted to normal and swapped columns 0 and 2');
        await sleep(1000);
      },
      async () => {
        updateNarration("It didn't solve; maybe it's in the wrong row alphabetically.");
        await sleep(3000);
      },
      // Swap Rows 1 and 2
      async () => {
        await sleep(50);
        if (isCancelled) return;
        // console.log('Highlight set to row 0');
        setHandPosition(getRowCenterPosition(0));
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#3b82f6'); // Blue color
        setHighlight({ type: 'row', index: 0 });
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'row', index: 1 });
        setHandPosition(getRowCenterPosition(1));
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        onSwapRowsRef.current(0, 1);
        setHighlight(null);
        await sleep(1000);
      },
      // Step 5: Solve Row 1
      async () => {
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        setFrozenRows((prev) => [...prev, 0]); // Freeze Row 0
        await sleep(1000);
      },
      async () => {
        updateNarration("Placing it in the first row worked!");
        await sleep(3000);
      },
      async () => {
        updateNarration("I see that flipping Column 2 can make 'NEWT.'");
        await sleep(3000);
      },
      // Flip column 2
      async () => {
        await sleep(50);
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        const buttonPos = getFlipButtonPosition('col', 1);
        setHandPosition(buttonPos);
        // console.log('Highlight set to column 1');
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'col', index: 1 });
        setHandColor('#3b82f6'); // Blue color
        onFlipColRef.current(1);
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        // console.log('Hand color reverted to normal');
        await sleep(500);
      },
      async () => {
        updateNarration("Hm... still not solved. Wrong row?");
        await sleep(3000);
      },
      // Swap Rows 3 and 4
      async () => {
        await sleep(50);
        if (isCancelled) return;
        // console.log('Highlight set to row 3');
        setHandPosition(getRowCenterPosition(3));
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#3b82f6'); // Blue color
        setHighlight({ type: 'row', index: 3 });
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'row', index: 2 });
        setHandPosition(getRowCenterPosition(2));
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        onSwapRowsRef.current(2, 3);
        setHighlight(null);
        await sleep(1000);
      },
      // Solve row 3
      async () => {
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        setFrozenRows((prev) => [...prev, 2]); // Freeze Row 2
        await sleep(1000);
      },
      async () => {
        updateNarration("Yep, that was it! Two rows to go.");
        await sleep(3000);
      },
      async () => {
        updateNarration("We can get 'WOLF' and 'FISH' by flipping Columns 1 and 3.");
        await sleep(3000);
      },
      // Flip column 1
      async () => {
        await sleep(50);
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        const buttonPos = getFlipButtonPosition('col', 0);
        setHandPosition(buttonPos);
        // console.log('Highlight set to column 0');
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'col', index: 0 });
        setHandColor('#3b82f6'); // Blue color
        onFlipColRef.current(0);
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        // console.log('Hand color reverted to normal');
        await sleep(500);
      },
      // Flip column 3
      async () => {
        await sleep(50);
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        const buttonPos = getFlipButtonPosition('col', 2);
        setHandPosition(buttonPos);
        // console.log('Highlight set to column 2');
        await sleep(1000);
      },
      async () => {
        if (isCancelled) return;
        setHighlight({ type: 'col', index: 2 });
        setHandColor('#3b82f6'); // Blue color
        onFlipColRef.current(2);
        // console.log('Hand color changed to blue');
        await sleep(500);
      },
      async () => {
        if (isCancelled) return;
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        // console.log('Hand color reverted to normal');
        await sleep(500);
      },
      // Solve Row 4
      async () => {
        setHandColor('#6b7280'); // Normal color
        setHighlight(null);
        setFrozenRows((prev) => [...prev, 1, 3]); // Freeze Rows 1 and 3
        await sleep(1000);
      },
      async () => {
        updateNarration("We did it!");
        await sleep(3000);
      },

      // Final Step: Narration - Animation completed
      async () => {
        await sleep(1000);
        if (isCancelled) return;
        setGrid(fullGrid);
        // Removed: setFrozenRows([]); // Keep the row frozen
        setHandPosition(getFlipButtonPosition('row', 2));
        setHandColor('#6b7280'); // Ensure hand is normal
        setHighlight(null);
        setFrozenRows([]);
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
      // console.log('Screen4 animation cancelled.');
    };
  }, [
    setHandColor,
    setHandPosition,
    setHighlight,
    setFrozenRows,
    setGrid,
  ]);

  return (
    <div className={styles.screenContainer}>
      <p className={styles.screenText}>
        <strong>Here's a full example. This is a board with the theme "Animals."</strong>
      </p>
      <div className={styles.narrationContainer}>
        <p className={styles.narrationText}>{narration}</p>
      </div>
    </div>
  );
};

export default FullTutorialScreen;
