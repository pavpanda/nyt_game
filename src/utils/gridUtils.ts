import { Grid } from '../types/types';

export const scrambleGrid = (grid: Grid): Grid => {
  const moves = 10;
  let currentGrid: Grid = grid.map(row => [...row]);
  
  for (let i = 0; i < moves; i++) {
    const isFlip = Math.random() < 0.5;
    const isRow = Math.random() < 0.5;
    const maxIndex = isRow ? currentGrid.length : currentGrid[0].length;
    const index1 = Math.floor(Math.random() * maxIndex);
    
    if (isFlip) {
      if (isRow) {
        currentGrid[index1] = currentGrid[index1].reverse();
      } else {
        for (let j = 0; j < Math.floor(currentGrid.length / 2); j++) {
          const k = currentGrid.length - 1 - j;
          [currentGrid[j][index1], currentGrid[k][index1]] = 
            [currentGrid[k][index1], currentGrid[j][index1]];
        }
      }
    } else {
      let index2: number;
      do {
        index2 = Math.floor(Math.random() * maxIndex);
      } while (index2 === index1);
      
      if (isRow) {
        const temp = [...currentGrid[index1]];
        currentGrid[index1] = [...currentGrid[index2]];
        currentGrid[index2] = temp;
      } else {
        for (let row = 0; row < currentGrid.length; row++) {
          [currentGrid[row][index1], currentGrid[row][index2]] = 
            [currentGrid[row][index2], currentGrid[row][index1]];
        }
      }
    }
  }
  // console.log(currentGrid);
  return currentGrid;
};

export const getRelativePosition = (element: HTMLElement, parent: HTMLElement) => {
  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  return {
    x: elementRect.left - parentRect.left,
    y: elementRect.top - parentRect.top
  };
};