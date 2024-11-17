// ResponsiveGameLayout.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Grid } from '../types/types';
import { GameHeader } from './GridHeader';
import { GridCell } from './GridCell';
import { GameStats } from './GameStats';
import { useTouchDragAndDrop } from '../hooks/useTouchDragAndDrop';
import { THEME } from '../constants/gameConstants';
import WinModal from './WinModal';
import HowToPlayAnimationModal from './HowToPlayAnimationModal/HowToPlayAnimationModal';
import { FlipButton } from './FlipButton';
import EasyModeToggle from './EasyModeToggle';

const EASY_MODE_KEY = 'easyMode';

interface ResponsiveGameLayoutProps {
  grid: Grid;
  frozenRows: Set<number>;
  solvedRowsOrder: Map<number, number>;
  moveCount: number;
  showInstructions: boolean;
  onShowInstructions: () => void;
  onCloseInstructions: () => void;
  onFlip: (index: number, type: 'row' | 'col') => void;
  setGrid: (grid: Grid) => void;
  setMoveCount: React.Dispatch<React.SetStateAction<number>>;
  showWinModal: boolean;
  onCloseWinModal: () => void;
  solution: Grid;
}

interface DragState {
  isDragging: boolean;
  direction?: 'vertical' | 'horizontal';
  dragOffset: { x: number; y: number };
  sourceRow?: number;
  sourceCol?: number;
  targetIndex?: number;
}

const ResponsiveGameLayout: React.FC<ResponsiveGameLayoutProps> = ({
  grid,
  frozenRows,
  solvedRowsOrder,
  moveCount,
  showInstructions,
  onShowInstructions,
  onCloseInstructions,
  onFlip,
  setGrid,
  setMoveCount,
  showWinModal,
  onCloseWinModal,
  solution
}) => {
  const [easyMode, setEasyMode] = useState<boolean>(() => {
    const savedEasyMode = localStorage.getItem(EASY_MODE_KEY);
    return savedEasyMode ? JSON.parse(savedEasyMode) : true;
  });
  
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const CELL_SIZE = {
    mobile: 64,
    desktop: 100,
  };

  const gridRef = useRef<HTMLDivElement>(null);

  const gapSize = 2;

  const [adjustedCellSize, setAdjustedCellSize] = useState<number>(
    CELL_SIZE.desktop
  );

  const [flippingRows, setFlippingRows] = useState<Set<number>>(new Set());
  const [flippingCols, setFlippingCols] = useState<Set<number>>(new Set());

  const FLIP_DURATION = 600;

  const { handleDragStart, dragState } = useTouchDragAndDrop(
    grid,
    frozenRows,
    setGrid,
    setMoveCount,
    adjustedCellSize,
    adjustedCellSize,
    gridRef,
    gapSize
  );

  useEffect(() => {
    localStorage.setItem(EASY_MODE_KEY, JSON.stringify(easyMode));
  }, [easyMode]);

  const handleFlip = (index: number, type: 'row' | 'col') => {
    onFlip(index, type);

    if (type === 'row') {
      setFlippingRows((prev) => {
        const newSet = new Set(prev);
        newSet.add(index);
        return newSet;
      });
      setTimeout(() => {
        setFlippingRows((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }, FLIP_DURATION);
    } else if (type === 'col') {
      setFlippingCols((prev) => {
        const newSet = new Set(prev);
        newSet.add(index);
        return newSet;
      });
      setTimeout(() => {
        setFlippingCols((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }, FLIP_DURATION);
    }
  };

  useEffect(() => {
    const updateDimensions = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      setIsMobile(vw < 768);

      const paddingTop = vw < 768 ? 16 : 60;
      const paddingX = vw < 768 ? 8 : 32;

      const availableWidth = vw - paddingX * 2;
      const availableHeight = vh - paddingTop;

      const baseGridSize = vw < 768 ? 280 : 400;
      const baseHeaderHeight = vw < 768 ? 80 : 160;

      const widthScale = availableWidth / (baseGridSize + 60);
      const heightScale =
        (availableHeight - baseHeaderHeight) / (baseGridSize + 60);

      const newScale = Math.min(widthScale, heightScale, 1);

      const currentCellSize = vw < 768 ? CELL_SIZE.mobile : CELL_SIZE.desktop;
      const newCellSize = currentCellSize * newScale;

      setAdjustedCellSize(newCellSize);
      setHeaderHeight(baseHeaderHeight * newScale);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getTransformStyle = (rowIndex: number, colIndex: number): React.CSSProperties => {
    const { isDragging, direction, dragOffset, sourceRow, sourceCol, targetIndex } = dragState;

    if (!isDragging || targetIndex === undefined) return {};

    const cellDistance = adjustedCellSize + gapSize;
    let transform = '';
    let zIndex = 0;
    let transition = '';

    if (frozenRows.has(rowIndex)) {
      return {};
    }

    if (direction === 'vertical' && sourceRow !== null && targetIndex !== null) {
      if (frozenRows.has(sourceRow) || frozenRows.has(targetIndex)) {
        return {};
      }

      if (rowIndex === sourceRow) {
        transform = `translateY(${dragOffset.y}px)`;
        zIndex = 10;
        transition = 'transform 0.2s ease-out';
      } else if (rowIndex === targetIndex && sourceRow !== null) {
        const offsetY = (sourceRow - targetIndex) * cellDistance;
        transform = `translateY(${offsetY}px)`;
        zIndex = 5;
        transition = 'transform 0.2s ease-out';
      }
    }

    if (direction === 'horizontal' && sourceCol !== undefined && targetIndex !== undefined) {
      if (frozenRows.has(rowIndex)) {
        return {};
      }

      if (colIndex === sourceCol) {
        transform = `translateX(${dragOffset.x}px)`;
        zIndex = 10;
        transition = 'transform 0.2s ease-out';
      } else if (colIndex === targetIndex && sourceCol !== null) {
        const offsetX = (sourceCol - targetIndex) * cellDistance;
        transform = `translateX(${offsetX}px)`;
        zIndex = 5;
        transition = 'transform 0.2s ease-out';
      }
    }

    return {
      transform,
      zIndex,
      transition,
      ...(transform ? { willChange: 'transform' } : {}),
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full md:px-8">
      <div
        style={{
          height: headerHeight,
        }}
        className="w-full flex justify-center mb-12 md:mb-32"
      >
        <GameHeader theme={THEME} onShowInstructions={onShowInstructions} />
      </div>

      <div className="relative mt-32 md:mt-8 flex flex-col items-center justify-center">
        <div className="relative">
          {/* Column Flip Buttons */}
          <div
            className="absolute -top-6 left-0 right-0 grid"
            style={{
              gridTemplateColumns: `repeat(${grid[0]?.length ?? 0}, ${adjustedCellSize}px)`,
              gap: `${gapSize}px`,
            }}
          >
            {grid[0]?.map((_, colIndex) => (
              <div
                key={`col-flip-${colIndex}`}
                className="flex justify-center"
              >
                <FlipButton
                  direction="col"
                  onClick={() => handleFlip(colIndex, 'col')}
                  disabled={false}
                />
              </div>
            ))}
          </div>

          {/* Row Flip Buttons */}
          <div
            className="absolute -left-6 top-0 bottom-0 flex flex-col"
            style={{
              gap: `${gapSize}px`,
            }}
          >
            {grid.map((_, rowIndex) => (
              <div
                key={`row-flip-${rowIndex}`}
                className="flex items-center"
                style={{ height: adjustedCellSize }}
              >
                <FlipButton
                  direction="row"
                  onClick={() => handleFlip(rowIndex, 'row')}
                  disabled={frozenRows.has(rowIndex)}
                />
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div
            className="grid"
            ref={gridRef}
            style={{
              gridTemplateColumns: `repeat(${grid[0]?.length ?? 0}, ${adjustedCellSize}px)`,
              gridTemplateRows: `repeat(${grid.length}, ${adjustedCellSize}px)`,
              gap: `${gapSize}px`,
              position: 'relative',
              perspective: '1000px',
            }}
            onMouseMove={(e) => {
              if (dragState.isDragging) {
                e.preventDefault();
              }
            }}
            onTouchMove={(e) => {
              if (dragState.isDragging) {
                e.preventDefault();
              }
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => {
                const isFlipping =
                  flippingRows.has(rowIndex) || flippingCols.has(colIndex);
                const flipType: 'row' | 'col' | undefined = flippingRows.has(
                  rowIndex
                )
                  ? 'row'
                  : flippingCols.has(colIndex)
                  ? 'col'
                  : undefined;

                const transformStyle = getTransformStyle(rowIndex, colIndex);

                return (
                  <div
                    key={`cell-${rowIndex}-${colIndex}`}
                    style={{
                      width: adjustedCellSize,
                      height: adjustedCellSize,
                      position: 'relative',
                      ...transformStyle,
                    }}
                  >
                    <GridCell
                      num={cell}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                      isFrozen={frozenRows.has(rowIndex)}
                      isFrozenRow={frozenRows.has(rowIndex)}
                      isFirstRow={rowIndex === 0}
                      isFirstCol={colIndex === 0}
                      onFlip={handleFlip}
                      onDragStart={handleDragStart}
                      dragState={dragState}
                      isFlipping={isFlipping}
                      flipType={flipType}
                      currentGrid={grid}
                      solution={solution}
                      easyMode={easyMode}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-row items-center gap-6 mt-4 md:mt-6 justify-center w-full">
        <div className="flex items-center">
          <GameStats moveCount={moveCount} completedRows={frozenRows.size} />
        </div>
        <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" /> {/* Added vertical divider */}
        <div className="flex items-center">
          <EasyModeToggle easyMode={easyMode} setEasyMode={setEasyMode} />
        </div>
      </div>

      {showInstructions && (
        <HowToPlayAnimationModal onClose={onCloseInstructions} />
      )}
    </div>
  );
};

export default ResponsiveGameLayout;