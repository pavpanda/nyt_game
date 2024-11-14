import React, { useEffect, useState, useRef } from 'react';
import { Grid } from '../types/types';
import { GameHeader } from './GridHeader';
import { GridCell } from './GridCell';
import { GameStats } from './GameStats';
import HowToPlay from './HowToPlay';
import { useTouchDragAndDrop } from '../hooks/useTouchDragAndDrop';
import { THEME } from '../constants/gameConstants';

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
}) => {
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
      const heightScale = (availableHeight - baseHeaderHeight) / (baseGridSize + 60);

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-2 md:px-8">
      <div
        style={{
          height: headerHeight,
        }}
        className="w-full flex justify-center"
      >
        <GameHeader theme={THEME} onShowInstructions={onShowInstructions} />
      </div>

      <div className="relative mt-32 md:mt-8 flex justify-center">
        <div className="relative">
          <div
            className="grid"
            ref={gridRef}
            style={{
              gridTemplateColumns: `repeat(${grid[0].length}, ${adjustedCellSize}px)`,
              gridTemplateRows: `repeat(${grid.length}, ${adjustedCellSize}px)`,
              gap: `${gapSize}px`,
              position: 'relative',
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  style={{
                    width: adjustedCellSize,
                    height: adjustedCellSize,
                    position: 'relative',
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
                    solvedRowNumber={solvedRowsOrder.get(rowIndex) || 0}
                    onFlip={onFlip}
                    onDragStart={handleDragStart}
                    dragState={dragState}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center w-full">
        <GameStats moveCount={moveCount} completedRows={frozenRows.size} />
      </div>

      {showInstructions && <HowToPlay onClose={onCloseInstructions} />}
    </div>
  );
};

export default ResponsiveGameLayout;