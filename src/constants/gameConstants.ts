import { Grid, TouchDragState } from '../types/types';

export const LINK = "https://flipisfun.com";
export const NUM_ROWS = 4;
export const SOLUTION: Grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
export const initialTouchState: TouchDragState = {
  active: false,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  elementIndex: -1,
  dragType: null,
  initialRect: null,
};


export const GAME_NUMBER = 103;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'I', 3: 'L', 4: 'M',
  5: 'L', 6: 'E', 7: 'N', 8: 'S',
  9: 'PR', 10: 'I', 11: 'N', 12: 'T',
  13: 'S', 14: 'TU', 15: 'D', 16: 'IO'  
};
export const SCRAMBLE = [
  [10, 6, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Photography";
