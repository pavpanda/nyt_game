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



export const GAME_NUMBER = 9;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'K', 2: 'N', 3: 'E', 4: 'E',
  5: 'L', 6: 'U', 7: 'N', 8: 'G',
  9: 'N', 10: 'E', 11: 'C', 12: 'K',
  13: 'N', 14: 'O', 15: 'S', 16: 'E'
};
export const SCRAMBLE = [
  [9, 15, 4, 10],
  [2, 12, 5, 3],
  [7, 8, 14, 6],
  [11, 16, 1, 13],
];
export const THEME = "Body Parts";
