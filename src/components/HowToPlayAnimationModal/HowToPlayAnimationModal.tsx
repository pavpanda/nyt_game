import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaTimes } from 'react-icons/fa';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import NavigationDots from './NavigationDots';
import AnimationGrid from './AnimationGrid';
import FlipButton from './HowToPlayFlipButton';
import HandIcon from './HandIcon';
import styles from './HowToPlayAnimationModal.module.css';

interface HowToPlayAnimationModalProps {
  onClose: () => void;
}

type Grid = number[][];

// [Previous constants remain the same]
export const CELL_SIZE = 40;
export const GAP_SIZE = 4;
export const GRID_PADDING = 20;
export const HAND_SIZE = 24;
export const HAND_OFFSET = 12;
export const FLIP_BUTTON_SIZE = 32;
export const FLIP_BUTTON_OFFSET = FLIP_BUTTON_SIZE / 2;
export const GRID_SIZE = 4 * CELL_SIZE + 3 * GAP_SIZE;

// [Previous helper functions remain the same]
export const getFlipButtonPosition = (direction: 'row' | 'col', index: number) => {
  if (direction === 'row') {
    return {
      top: GRID_PADDING + index * (CELL_SIZE + GAP_SIZE) + (CELL_SIZE / 2) - FLIP_BUTTON_OFFSET,
      left: -FLIP_BUTTON_SIZE - 8,
    };
  } else {
    return {
      top: -FLIP_BUTTON_SIZE - 8,
      left: GRID_PADDING + index * (CELL_SIZE + GAP_SIZE) + (CELL_SIZE / 2) - FLIP_BUTTON_OFFSET,
    };
  }
};

export const getRowCenterPosition = (rowIndex: number) => ({
  top: GRID_PADDING + rowIndex * (CELL_SIZE + GAP_SIZE) + (CELL_SIZE / 2) - HAND_OFFSET,
  left: GRID_PADDING + (GRID_SIZE / 2) - HAND_OFFSET,
});

export const getColumnCenterPosition = (colIndex: number) => ({
  top: GRID_PADDING + (GRID_SIZE / 2) - HAND_OFFSET,
  left: GRID_PADDING + colIndex * (CELL_SIZE + GAP_SIZE) + (CELL_SIZE / 2) - HAND_OFFSET,
});

export const getCellCenter = (rowIndex: number, colIndex: number) => ({
  top: GRID_PADDING + rowIndex * (CELL_SIZE + GAP_SIZE) + (CELL_SIZE / 2) - HAND_OFFSET,
  left: GRID_PADDING + colIndex * (CELL_SIZE + GAP_SIZE) + (CELL_SIZE / 2) - HAND_OFFSET,
});

const initialGrid: Grid = [
  [6, 2, 9, 12],
  [16, 1, 7, 8],
  [3, 10, 11, 4],
  [13, 14, 15, 5],
];

const HowToPlayAnimationModal: React.FC<HowToPlayAnimationModalProps> = ({ onClose }) => {
  // [Previous state declarations remain the same]
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const [handPosition, setHandPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [highlight, setHighlight] = useState<{ type: 'row' | 'col'; index: number } | null>(null);
  const [handColor, setHandColor] = useState<string>('#6b7280');
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [frozenRows, setFrozenRows] = useState<Set<number>>(new Set());

  // [Previous functions remain the same]
  const flipRow = (rowIndex: number) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[rowIndex] = [...newGrid[rowIndex]].reverse();
      return newGrid;
    });
  };

  const flipCol = (colIndex: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      const column = newGrid.map((row) => row[colIndex]).reverse();
      newGrid.forEach((row, idx) => {
        row[colIndex] = column[idx];
      });
      return newGrid;
    });
  };

  const swapRows = (row1: number, row2: number) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      [newGrid[row1], newGrid[row2]] = [newGrid[row2], newGrid[row1]];
      return newGrid;
    });
  };

  const swapColumns = (col1: number, col2: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      newGrid.forEach((row) => {
        [row[col1], row[col2]] = [row[col2], row[col1]];
      });
      return newGrid;
    });
  };

  // [Previous handlers and effects remain the same]
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentScreen < 2) setCurrentScreen(currentScreen + 1);
    },
    onSwipedRight: () => {
      if (currentScreen > 0) setCurrentScreen(currentScreen - 1);
    },
    trackMouse: true,
  });

  const handleScreenComplete = () => {
    if (currentScreen < 2) {
      setCurrentScreen(currentScreen + 1);
    } else {
      setGrid(initialGrid);
      setFrozenRows(new Set());
      setCurrentScreen(0);
    }
  };

  useEffect(() => {
    if (currentScreen === 0) {
      setHandPosition(getRowCenterPosition(0));
      setHandColor('#6b7280');
      setHighlight(null);
    } else if (currentScreen === 1) {
      const buttonPos = getFlipButtonPosition('row', 2);
      setHandPosition(buttonPos);
      setHandColor('#6b7280');
      setHighlight(null);
    } else if (currentScreen === 2) {
      const buttonPos = getFlipButtonPosition('row', 2);
      setHandPosition(buttonPos);
      setHandColor('#6b7280');
      setHighlight(null);
    }
  }, [currentScreen]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} {...handlers}>
        <button onClick={onClose} className={styles.closeButton} aria-label="Close">
          <FaTimes size={20} />
        </button>
        <h2 className={styles.modalTitle}>How to Play</h2>
        <div className={styles.instructions}>
          <p className={styles.instructionText}>
            Arrange four rows of 4-letter themed words in alphabetical order. <br/><br/>Words are only solved when they're in the correct row.
          </p>
        </div>
        <div className={styles.animationContainer}>
          <div className={styles.gridWrapper}>
            {/* Flip Buttons for Rows */}
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <FlipButton
                key={`flip-row-${rowIndex}`}
                direction="row"
                index={rowIndex}
                onClick={() => flipRow(rowIndex)}
              />
            ))}

            {/* Flip Buttons for Columns */}
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <FlipButton
                key={`flip-col-${colIndex}`}
                direction="col"
                index={colIndex}
                onClick={() => flipCol(colIndex)}
              />
            ))}

            {/* Animation Grid */}
            <AnimationGrid grid={grid} highlight={highlight} frozenRows={frozenRows} />

            {/* Animated Hand */}
            <HandIcon position={handPosition} color={handColor} />
          </div>
        </div>
        <div className={styles.modalBody}>
          {currentScreen === 0 && (
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
              onComplete={handleScreenComplete}
            />
          )}
          {currentScreen === 1 && (
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
              onComplete={handleScreenComplete}
            />
          )}
          {currentScreen === 2 && (
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
              onComplete={handleScreenComplete}
            />
          )}
        </div>
        <NavigationDots total={3} current={currentScreen} />
      </div>
    </div>
  );
};

export default HowToPlayAnimationModal;