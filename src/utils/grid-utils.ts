export const moveRow = (grid: number[][], fromIndex: number, toIndex: number): number[][] => {
  const newGrid = [...grid];
  const [movedRow] = newGrid.splice(fromIndex, 1);
  newGrid.splice(toIndex, 0, movedRow);
  return newGrid;
};

export const moveColumn = (grid: number[][], fromIndex: number, toIndex: number): number[][] => {
  return grid.map(row => {
    const newRow = [...row];
    const [movedItem] = newRow.splice(fromIndex, 1);
    newRow.splice(toIndex, 0, movedItem);
    return newRow;
  });
};

export const getCurrentPreviewIndex = (
  originalIndex: number,
  dragType: 'row' | 'col' | null,
  dragIndex: number | null,
  dropIndex: number | null
): number => {
  if (!dragType || dragIndex === null || dropIndex === null) return originalIndex;
  
  if (originalIndex === dragIndex) {
    return dropIndex;
  }
  
  if (dropIndex > dragIndex) {
    return originalIndex < dropIndex && originalIndex > dragIndex 
      ? originalIndex - 1 
      : originalIndex;
  } else {
    return originalIndex >= dropIndex && originalIndex < dragIndex 
      ? originalIndex + 1 
      : originalIndex;
  }
};

export const DEFAULT_GRID = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];