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



export const GAME_NUMBER = 30;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'O', 3: 'W', 4: 'L',
  5: 'S', 6: 'P', 7: 'I', 8: 'N',
  9: 'T', 10: 'E', 11: 'S', 12: 'T',
  13: 'T', 14: 'O', 15: 'S', 16: 'S'
};
export const SCRAMBLE = [
  [2, 15, 9, 11],
  [13, 3, 8, 7],
  [4, 14, 10, 16],
  [6, 1, 5, 12],
];

export const THEME = "Cricket!";
