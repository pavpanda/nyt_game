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



export const GAME_NUMBER = 15;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'K', 2: 'E', 3: 'Y', 4: 'S',
  5: 'P', 6: 'H', 7: 'O', 8: 'NE',
  9: 'R', 10: 'EM', 11: 'O', 12: 'TE',
  13: 'W', 14: 'AL', 15: 'LE', 16: 'T'
};
export const SCRAMBLE = [
  [9, 13, 1, 10],
  [16, 5, 6, 2],
  [3, 8, 7, 14],
  [11, 4, 15, 12],
];
export const THEME = "Where'd it go?";
