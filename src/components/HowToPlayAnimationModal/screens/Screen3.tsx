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

  useEffect(() => {
    let isCancelled = false;

    const animationSteps = async () => {
      // Step 1: Move hand to Row 3 flip button
      await sleep(1000);
      if (isCancelled) return;
      setHandColor('#6b7280');
      const buttonPos = getFlipButtonPosition('row', 2);
      setHandPosition(buttonPos);
      
      // Step 2: Turn hand blue and highlight
      await sleep(500);
      if (isCancelled) return;
      setHighlight({ type: 'row', index: 2 });
      setHandColor('#3b82f6');
      
      // Step 3: Flip row and return hand to normal
      await sleep(500);
      if (isCancelled) return;
      onFlipRow(2);
      setHandColor('#6b7280');
      
      // Step 4: Mark row as frozen
      await sleep(1000);
      if (isCancelled) return;
      setHighlight(null);
      setFrozenRows([2]);
      
      // Step 5: Reset everything for next iteration
      await sleep(1000);
      if (isCancelled) return;
      setGrid(initialGrid3);
      setFrozenRows([]);
      setHandPosition(getFlipButtonPosition('row', 2));
      setHandColor('#6b7280');
      setHighlight(null);
      
      await sleep(1000);
    };

    const runAnimations = async () => {
      while (!isCancelled) {
        await animationSteps();
      }
    };

    runAnimations();

    return () => {
      console.log("UH OH")
      isCancelled = true;
    };
  }, [onFlipRow, onFlipCol, setHandColor, setHandPosition, setHighlight, setGrid, setFrozenRows]);

  return (
    <div className={styles.screenContainer}>
      <p className={styles.screenText}>
        Once you solve a row, it freezes and won't change during further swaps or flips.
      </p>
    </div>
  );
};

export default Screen3;