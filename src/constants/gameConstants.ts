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



export const GAME_NUMBER = 24;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'S', 2: 'L', 3: 'O', 4: 'W',
  5: 'S', 6: 'T', 7: 'O', 8: 'P',
  9: 'X', 10: 'I', 11: 'N', 12: 'G',
  13: 'Z', 14: 'O', 15: 'N', 16: 'E'
};
export const SCRAMBLE = [
  [13, 15, 3, 10],
  [1, 12, 4, 14],
  [8, 16, 9, 6],
  [7, 11, 2, 5],
];

export const THEME = "Road sign contents!";
