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



export const GAME_NUMBER = 34;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'I', 3: 'V', 4: 'E',
  5: 'F', 6: 'O', 7: 'U', 8: 'R',
  9: 'N', 10: 'I', 11: 'N', 12: 'E',
  13: 'Z', 14: 'E', 15: 'R', 16: 'O'
};
export const SCRAMBLE = [
  [2, 15, 1, 11],
  [13, 10, 8, 7],
  [16, 14, 3, 4],
  [6, 9, 5, 12],
];

export const THEME = "Numbers";
