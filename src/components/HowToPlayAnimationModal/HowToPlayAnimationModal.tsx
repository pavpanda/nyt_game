// src/components/HowToPlayAnimationModal/HowToPlayAnimationModal.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Screen0 from './screens/Screen0'; // Import Screen0
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4'; // Import Screen4
import NavigationDots from './NavigationDots';
import AnimationGrid from './AnimationGrid';
import FlipButton from './HowToPlayFlipButton';
import HandIcon from './HandIcon';
import styles from './HowToPlayAnimationModal.module.css';

interface HowToPlayAnimationModalProps {
  onClose: () => void;
}

type Grid = number[][];

// Constants
export const CELL_SIZE = 40;
export const GAP_SIZE = 4;
export const GRID_PADDING = 20;
export const HAND_SIZE = 24;
export const HAND_OFFSET = 12;
export const FLIP_BUTTON_SIZE = 32;
export const FLIP_BUTTON_OFFSET = FLIP_BUTTON_SIZE / 2;
export const GRID_SIZE = 4 * CELL_SIZE + 3 * GAP_SIZE;

// Helper Functions
export const getFlipButtonPosition = (direction: 'row' | 'col', index: number) => {
  if (direction === 'row') {
    return {
      top: GRID_PADDING + index * (CELL_SIZE + GAP_SIZE) + CELL_SIZE / 2 - FLIP_BUTTON_OFFSET,
      left: -FLIP_BUTTON_SIZE - 8,
    };
  } else {
    return {
      top: -FLIP_BUTTON_SIZE - 8,
      left: GRID_PADDING + index * (CELL_SIZE + GAP_SIZE) + CELL_SIZE / 2 - FLIP_BUTTON_OFFSET,
    };
  }
};

export const getRowCenterPosition = (rowIndex: number) => ({
  top: GRID_PADDING + rowIndex * (CELL_SIZE + GAP_SIZE) + CELL_SIZE / 2 - HAND_OFFSET,
  left: GRID_PADDING + GRID_SIZE / 2 - HAND_OFFSET,
});

export const getColumnCenterPosition = (colIndex: number) => ({
  top: GRID_PADDING + GRID_SIZE / 2 - HAND_OFFSET,
  left: GRID_PADDING + colIndex * (CELL_SIZE + GAP_SIZE) + CELL_SIZE / 2 - HAND_OFFSET,
});

export const getCellCenter = (rowIndex: number, colIndex: number) => ({
  top: GRID_PADDING + rowIndex * (CELL_SIZE + GAP_SIZE) + CELL_SIZE / 2 - HAND_OFFSET,
  left: GRID_PADDING + colIndex * (CELL_SIZE + GAP_SIZE) + CELL_SIZE / 2 - HAND_OFFSET,
});

// Initial Grids for Each Screen
export const initialGrid1: Grid = [
  [6, 2, 9, 12],
  [16, 1, 7, 8],
  [3, 10, 11, 4],
  [13, 14, 15, 5],
];

export const initialGrid2: Grid = [
  [6, 2, 9, 12],
  [16, 1, 7, 8],
  [3, 10, 11, 4],
  [13, 14, 15, 5],
];

export const initialGrid3: Grid = [
  [6, 2, 9, 12],
  [16, 1, 7, 8],
  [3, 10, 11, 4],
  [13, 14, 15, 5],
];

export const initialGrid4: Grid = [
  [15, 10, 11, 8],
  [3, 2, 1, 4],
  [7, 14, 5, 16],
  [13, 6, 9, 12],
];

const HowToPlayAnimationModal: React.FC<HowToPlayAnimationModalProps> = ({ onClose }) => {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [grid, setGrid] = useState<Grid>(initialGrid1);
  const [handPosition, setHandPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [highlight, setHighlight] = useState<{ type: 'row' | 'col'; index: number } | null>(null);
  const [handColor, setHandColor] = useState<string>('#6b7280');
  const [frozenRows, setFrozenRows] = useState<number[]>([]);

  // Flip and Swap Functions
  const flipRow = useCallback(
    (rowIndex: number) => {
      if (frozenRows.includes(rowIndex)) {
        console.log(`Row ${rowIndex} is frozen and cannot be flipped.`);
        return;
      }
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[rowIndex] = [...newGrid[rowIndex]].reverse();
        return newGrid;
      });
    },
    [frozenRows]
  );

  const flipCol = useCallback(
    (colIndex: number) => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);
        const nonFrozenIndices = newGrid
          .map((_, idx) => idx)
          .filter((idx) => !frozenRows.includes(idx));

        const columnValues = nonFrozenIndices.map((idx) => newGrid[idx][colIndex]);
        const reversedColumn = [...columnValues].reverse();

        nonFrozenIndices.forEach((idx, i) => {
          newGrid[idx][colIndex] = reversedColumn[i];
        });

        return newGrid;
      });
    },
    [frozenRows]
  );

  const swapRows = useCallback(
    (row1: number, row2: number) => {
      if (frozenRows.includes(row1) || frozenRows.includes(row2)) {
        console.log(`One or both rows are frozen and cannot be swapped.`);
        return;
      }
      setGrid((prevGrid) => {
        const newGrid = [...prevGrid];
        [newGrid[row1], newGrid[row2]] = [newGrid[row2], newGrid[row1]];
        return newGrid;
      });
    },
    [frozenRows]
  );

  const swapColumns = useCallback(
    (col1: number, col2: number) => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);
        newGrid.forEach((row, idx) => {
          if (!frozenRows.includes(idx)) {
            [row[col1], row[col2]] = [row[col2], row[col1]];
          }
        });
        return newGrid;
      });
    },
    [frozenRows]
  );

  // Navigation Handlers
  const handleNext = useCallback(() => {
    if (currentScreen < 4) { // Updated to 4
      setCurrentScreen((prev) => prev + 1);
    }
  }, [currentScreen]);

  const handlePrev = useCallback(() => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    }
  }, [currentScreen]);

  // Update Grid and Frozen Rows based on current screen
  useEffect(() => {
    switch (currentScreen) {
      case 1:
        setGrid(initialGrid1);
        setFrozenRows([]);
        break;
      case 2:
        setGrid(initialGrid2);
        setFrozenRows([]);
        break;
      case 3:
        setGrid(initialGrid3);
        setFrozenRows([1]); // Example: Freeze row index 1 at start of Screen3
        break;
      case 4:
        setGrid(initialGrid4);
        setFrozenRows([]);
        break;
      default:
        setGrid(initialGrid1);
        setFrozenRows([]);
    }
  }, [currentScreen]);

  // Update Hand Position and Highlight based on current screen
  useEffect(() => {
    if (currentScreen === 1) {
      setHandPosition(getRowCenterPosition(0));
      setHandColor('#6b7280');
      setHighlight(null);
    } else if (currentScreen === 2) {
      const buttonPos = getFlipButtonPosition('row', 2);
      setHandPosition(buttonPos);
      setHandColor('#6b7280');
      setHighlight(null);
    } else if (currentScreen === 3) {
      const buttonPos = getFlipButtonPosition('row', 1);
      setHandPosition(buttonPos);
      setHandColor('#6b7280');
      setHighlight(null);
    } else if (currentScreen === 4) {
      // For Screen4, reset hand position and highlight
      setHandPosition({ top: 0, left: 0 });
      setHandColor('#6b7280');
      setHighlight(null);
    } else {
      // For Screen0, reset hand position and highlight
      setHandPosition({ top: 0, left: 0 });
      setHandColor('#6b7280');
      setHighlight(null);
    }
  }, [currentScreen]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton} aria-label="Close">
          <FaTimes size={20} />
        </button>
        <h2 className={styles.modalTitle}>How to Play</h2>
        <div className={styles.modalBody}>
          {currentScreen === 0 && <Screen0 />}
          {currentScreen === 1 && (
            <Screen1
              grid={grid}
              highlight={highlight}
              handPosition={handPosition}
              handColor={handColor}
              onFlipRow={flipRow}
              onFlipCol={flipCol}
              onSwapRows={swapRows}
              onSwapColumns={swapColumns}
              setHandColor={setHandColor}
              setHandPosition={setHandPosition}
              setHighlight={setHighlight}
              setGrid={setGrid}
              setFrozenRows={setFrozenRows}
            />
          )}
          {currentScreen === 2 && (
            <Screen2
              grid={grid}
              highlight={highlight}
              handPosition={handPosition}
              handColor={handColor}
              onFlipRow={flipRow}
              onFlipCol={flipCol}
              setHandColor={setHandColor}
              setHandPosition={setHandPosition}
              setHighlight={setHighlight}
              setGrid={setGrid}
              setFrozenRows={setFrozenRows}
            />
          )}
          {currentScreen === 3 && (
            <Screen3
              grid={grid}
              highlight={highlight}
              handPosition={handPosition}
              handColor={handColor}
              onFlipRow={flipRow}
              onFlipCol={flipCol}
              setHandColor={setHandColor}
              setHandPosition={setHandPosition}
              setHighlight={setHighlight}
              frozenRows={frozenRows}
              setFrozenRows={setFrozenRows}
              setGrid={setGrid}
            />
          )}
          {currentScreen === 4 && (
            <Screen4
              grid={grid}
              highlight={highlight}
              handPosition={handPosition}
              handColor={handColor}
              onFlipRow={flipRow}
              onFlipCol={flipCol}
              onSwapRows={swapRows}
              onSwapColumns={swapColumns}
              setHandColor={setHandColor}
              setHandPosition={setHandPosition}
              setHighlight={setHighlight}
              frozenRows={frozenRows}
              setFrozenRows={setFrozenRows}
              setGrid={setGrid}
            />
          )}
        </div>

        {/* Conditionally render the animation grid and related components only for screens 1, 2, 3, 4 */}
        {currentScreen > 0 && (
          <div className={styles.animationContainer}>
            <div className={styles.gridWrapper}>
              {/* Flip Buttons for Rows */}
              {Array.from({ length: 4 }).map((_, rowIndex) => (
                <FlipButton
                  key={`flip-row-${rowIndex}`}
                  direction="row"
                  index={rowIndex}
                  onClick={() => flipRow(rowIndex)}
                  disabled={frozenRows.includes(rowIndex)} // Disable button if row is frozen
                />
              ))}

              {/* Flip Buttons for Columns */}
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <FlipButton
                  key={`flip-col-${colIndex}`}
                  direction="col"
                  index={colIndex}
                  onClick={() => flipCol(colIndex)}
                  disabled={false}
                />
              ))}

              {/* Animation Grid */}
              <AnimationGrid grid={grid} highlight={highlight} frozenRows={frozenRows} />

              {/* Animated Hand */}
              <HandIcon position={handPosition} color={handColor} />
            </div>
          </div>
        )}

        <div className={styles.navigation}>
          <button
            onClick={handlePrev}
            className={styles.navButton}
            disabled={currentScreen === 0}
            aria-label="Previous Screen"
          >
            <FaArrowLeft size={16} />
          </button>
          <NavigationDots total={5} current={currentScreen} /> {/* Updated total to 5 */}
          <button
            onClick={handleNext}
            className={styles.navButton}
            disabled={currentScreen === 4}
            aria-label="Next Screen"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayAnimationModal;
