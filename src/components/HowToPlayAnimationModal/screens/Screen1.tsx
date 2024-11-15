import React, { useEffect } from 'react';
import styles from './Screen1.module.css';
import { getFlipButtonPosition, getRowCenterPosition, getColumnCenterPosition } from '../HowToPlayAnimationModal';

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
  onComplete: () => void;
}

const Screen1: React.FC<Screen1Props> = ({
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
  onComplete,
}) => {
  // Sleep utility
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Define the animation steps
  const animationSteps = [
    // Step 1: Move hand to Row 1 center
    async () => {
      setHandColor('#6b7280');
      setHighlight({ type: 'row', index: 0 });
      setHandPosition(getRowCenterPosition(0));
      await sleep(1000);
    },
    // Step 2: Turn hand blue
    async () => {
      setHandColor('#3b82f6');
      await sleep(500);
    },
    // Step 3: Move hand to Row 3 center
    async () => {
      setHandPosition(getRowCenterPosition(2));
      setHighlight({ type: 'row', index: 2 });
      await sleep(1000);
    },
    // Step 4: Swap Rows 1 and 3
    async () => {
      onSwapRows(0, 2);
      await sleep(1000);
    },
    // Step 5: Move hand to Column 2 center
    async () => {
      setHandColor('#6b7280');
      setHandPosition(getColumnCenterPosition(1));
      setHighlight({ type: 'col', index: 1 });
      await sleep(1000);
    },
    // Step 6: Turn hand blue
    async () => {
      setHandColor('#3b82f6');
      await sleep(500);
    },
    // Step 7: Move hand to Column 4 center
    async () => {
      setHandPosition(getColumnCenterPosition(3));
      setHighlight({ type: 'col', index: 3 });
      await sleep(1000);
    },
    // Step 8: Swap Columns 2 and 4
    async () => {
      onSwapColumns(1, 3);
      await sleep(1000);
    },
  ];

  useEffect(() => {
    let isCancelled = false;

    const runAnimations = async () => {
      for (let step = 0; step < animationSteps.length; step++) {
        if (isCancelled) break;
        await animationSteps[step]();
      }
      if (!isCancelled) {
        onComplete();
      }
    };

    runAnimations();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className={styles.screenContainer}>
      <p className={styles.screenTitle}>Drag rows/columns to swap them!</p>
    </div>
  );
};

export default Screen1;