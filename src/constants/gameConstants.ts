import { Grid, TouchDragState } from '../types/types';

export const LINK = "www.flipisfun.com";
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



export const GAME_NUMBER = 36;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'R', 3: 'O', 4: 'P',
  5: 'P', 6: 'I', 7: 'L', 8: 'L',
  9: 'S', 10: 'H', 11: 'O', 12: 'T',
  13: 'S', 14: 'W', 15: 'A', 16: 'B'
};
export const SCRAMBLE = [
  [6, 1, 15, 2],
  [16, 10, 8, 7],
  [13, 14, 3, 4],
  [11, 9, 5, 12],
];

export const THEME = "Doctor's Tools";
