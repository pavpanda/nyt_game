import React, { useState, useEffect } from 'react';
import { GridProps, DragType } from '../types/number-grid.types';
import { moveRow, moveColumn, DEFAULT_GRID } from '../utils/grid-utils';
import { ColumnHandles, RowHandles } from './GridHandles';

const scrambleGrid = (grid: number[][]) => {
  const moves = 10;
  let currentGrid = grid.map(row => [...row]);
  
  for (let i = 0; i < moves; i++) {
    // Randomly choose between flip or swap
    const isFlip = Math.random() < 0.5;
    
    if (isFlip) {
      // Randomly choose row or column flip
      const isRow = Math.random() < 0.5;
      const maxIndex = isRow ? currentGrid.length : currentGrid[0].length;
      const index = Math.floor(Math.random() * maxIndex);
      
      if (isRow) {
        currentGrid[index] = currentGrid[index].reverse();
      } else {
        for (let j = 0; j < Math.floor(currentGrid.length / 2); j++) {
          const k = currentGrid.length - 1 - j;
          [currentGrid[j][index], currentGrid[k][index]] = 
            [currentGrid[k][index], currentGrid[j][index]];
        }
      }
    } else {
      // Randomly choose row or column swap
      const isRow = Math.random() < 0.5;
      const maxIndex = isRow ? currentGrid.length : currentGrid[0].length;
      const index1 = Math.floor(Math.random() * maxIndex);
      let index2;
      do {
        index2 = Math.floor(Math.random() * maxIndex);
      } while (index2 === index1);
      
      currentGrid = isRow 
        ? moveRow(currentGrid, index1, index2)
        : moveColumn(currentGrid, index1, index2);
    }
  }
  
  return currentGrid;
};

const NumberGrid: React.FC<{ initialGrid?: number[][] }> = ({ initialGrid = DEFAULT_GRID }) => {
  const [grid, setGrid] = useState<number[][]>(() => scrambleGrid(initialGrid));
  const [dragType, setDragType] = useState<DragType>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const [previewGrid, setPreviewGrid] = useState<number[][]>(grid);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    if (dragIndex === null || dropIndex === null || dragType === null) {
      setPreviewGrid(grid);
      return;
    }

    if (dragIndex === dropIndex) {
      return;
    }

    const newGrid = dragType === 'row'
      ? moveRow([...grid.map(row => [...row])], dragIndex, dropIndex)
      : moveColumn([...grid.map(row => [...row])], dragIndex, dropIndex);
    
    setPreviewGrid(newGrid);
  }, [dragIndex, dropIndex, dragType, grid]);

  const handleDragStart = (
    e: React.DragEvent,
    index: number,
    type: DragType
  ) => {
    setDragType(type);
    setDragIndex(index);
    
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (dragIndex === null || dragType === null || dragIndex === dropIndex) return;

    const newGrid = dragType === 'row'
      ? moveRow(grid, dragIndex, dropIndex)
      : moveColumn(grid, dragIndex, dropIndex);
    
    setGrid(newGrid);
    setMoveCount(prevCount => prevCount + 1);
    handleDragEnd();
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDropIndex(index);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setDragType(null);
    setDropIndex(null);
  };

  const handleFlip = (index: number, type: DragType) => {
    const newGrid = grid.map(row => [...row]);
    
    if (type === 'row') {
      newGrid[index] = newGrid[index].reverse();
    } else {
      for (let i = 0; i < Math.floor(newGrid.length / 2); i++) {
        const j = newGrid.length - 1 - i;
        [newGrid[i][index], newGrid[j][index]] = [newGrid[j][index], newGrid[i][index]];
      }
    }
    
    setGrid(newGrid);
    setMoveCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setGrid(scrambleGrid(initialGrid));
    setMoveCount(0);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-6xl font-bold">Flip</h1>
      <p className="text-gray-600 text-2xl">Drag handles to reorder or click arrows to flip rows/columns</p>

      <div className="relative bg-white rounded-lg shadow-sm">
        <div className="h-20">
          <ColumnHandles
            columnCount={grid[0].length}
            dragType={dragType}
            dropIndex={dropIndex}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onFlip={handleFlip}
          />
        </div>

        <div className="flex">
          <RowHandles
            rowCount={grid.length}
            dragType={dragType}
            dropIndex={dropIndex}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onFlip={handleFlip}
          />

          <div className="grid grid-cols-4 gap-px bg-gray-200 p-px">
            {previewGrid.map((row, rowIndex) =>
              row.map((num, colIndex) => {
                const originalRowIndex = grid.findIndex(r => r.includes(num));
                const originalColIndex = grid[originalRowIndex].indexOf(num);
                const isHighlighted = 
                  (dragType === 'row' && originalRowIndex === dragIndex) ||
                  (dragType === 'col' && originalColIndex === dragIndex);

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-12 h-12 flex items-center justify-center font-medium select-none
                             transition-colors duration-200 ${
                               isHighlighted ? 'bg-blue-50' : 'bg-white'
                             }`}
                  >
                    {num}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="text-gray-500 text-lg font-medium">
          Moves: {moveCount}
        </div>
        <button 
          onClick={handleReset}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          New Puzzle
        </button>
      </div>
    </div>
  );
};

export default NumberGrid;