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



export const GAME_NUMBER = 10;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'O', 3: 'H', 4: 'A',
  5: 'K', 6: 'Y', 7: 'I', 8: 'V',
  9: 'L', 10: 'I', 11: 'M', 12: 'A',
  13: 'O', 14: 'S', 15: 'L', 16: 'O'
};
export const SCRAMBLE = [
  [13, 2, 8, 11],
  [4, 10, 16, 5],
  [9, 7, 3, 14],
  [6, 1, 12, 15],
];
export const THEME = "Capital Cities";
