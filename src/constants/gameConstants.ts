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


export const GAME_NUMBER = 104;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'R', 3: 'E', 4: 'W',
  5: 'E', 6: 'G', 7: 'G', 8: 'S',
  9: 'W', 10: 'A', 11: 'K', 12: 'E',
  13: 'W', 14: 'A', 15: 'S', 16: 'H'  
};
export const SCRAMBLE = [
  [10, 9, 6, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Morning routine";
