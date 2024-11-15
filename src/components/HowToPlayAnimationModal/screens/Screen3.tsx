// Screen3.tsx
import React, { useEffect } from 'react';
import styles from './Screen3.module.css';
import { CELL_SIZE, GAP_SIZE, GRID_PADDING, HAND_OFFSET, getFlipButtonPosition } from '../HowToPlayAnimationModal';

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
  frozenRows: Set<number>;
  setFrozenRows: (rows: Set<number>) => void;
  onComplete: () => void;
}

const Screen3: React.FC<Screen3Props> = ({
  grid,
  highlight,
  handPosition,
  handColor,
  onFlipRow,
  onFlipCol,
  setHandColor,
  setHandPosition,
  setHighlight,
  frozenRows,
  setFrozenRows,
  onComplete,
}) => {
  // Sleep utility
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Define the animation steps
  const animationSteps = [
    // Step 1: Move hand to Row 3 flip button
    async () => {
      setHandColor('#6b7280');
      setHighlight({ type: 'row', index: 2 });
      const buttonPos = getFlipButtonPosition('row', 2);
      setHandPosition(buttonPos); // Removed GRID_PADDING addition
      await sleep(1000);
    },
    // Step 2: Turn hand blue
    async () => {
      setHandColor('#3b82f6');
      await sleep(500);
    },
    // Step 3: Flip Row 3
    async () => {
      onFlipRow(2);
      await sleep(1000);
    },
    // Step 4: Mark Row 3 as frozen and turn green
    async () => {
      setHandColor('#6b7280');
      setHighlight(null);
      setFrozenRows(new Set(frozenRows).add(2));
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
      <h3 className={styles.screenTitle}>When you solve a row, it'll stay solved/frozen!</h3>
    </div>
  );
};

export default Screen3;
