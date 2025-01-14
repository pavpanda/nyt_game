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


export const GAME_NUMBER = 63;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'P', 2: 'E', 3: 'A', 4: 'K',
  5: 'R', 6: 'O', 7: 'C', 8: 'K',
  9: 'T', 10: 'R', 11: 'E', 12: 'E',
  13: 'W', 14: 'A', 15: 'L', 16: 'L'
};
export const SCRAMBLE = [
  [3, 6, 12, 1],
  [13, 5, 10, 8],
  [9, 11, 16, 4],
  [7, 14, 2, 15],
];

export const THEME = "Climbing";
