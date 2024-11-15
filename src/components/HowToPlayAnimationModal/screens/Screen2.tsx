// Screen2.tsx
import React, { useEffect } from 'react';
import styles from './Screen2.module.css';
import { CELL_SIZE, GAP_SIZE, GRID_PADDING, HAND_OFFSET, getFlipButtonPosition } from '../HowToPlayAnimationModal';

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
  onComplete: () => void;
}

const Screen2: React.FC<Screen2Props> = ({
  grid,
  highlight,
  handPosition,
  handColor,
  onFlipRow,
  onFlipCol,
  setHandColor,
  setHandPosition,
  setHighlight,
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
    // Step 4: Move hand to Column 1 flip button
    async () => {
      setHandColor('#6b7280');
      const buttonPos = getFlipButtonPosition('col', 0);
      setHandPosition(buttonPos); // Removed GRID_PADDING addition
      setHighlight({ type: 'col', index: 0 });
      await sleep(1000);
    },
    // Step 5: Turn hand blue
    async () => {
      setHandColor('#3b82f6');
      await sleep(500);
    },
    // Step 6: Flip Column 1
    async () => {
      onFlipCol(0);
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
      <h3 className={styles.screenTitle}>Click on outer buttons to flip rows/columns!</h3>
    </div>
  );
};

export default Screen2;
