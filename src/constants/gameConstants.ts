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



export const GAME_NUMBER = 18;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'L', 3: 'U', 4: 'B',
  5: 'F', 6: 'L', 7: 'A', 8: 'G',
  9: 'H', 10: 'O', 11: 'L', 12: 'E',
  13: 'P', 14: 'U', 15: 'T', 16: 'T'
};
export const SCRAMBLE = [
  [10, 3, 15, 7],
  [8, 12, 4, 14],
  [1, 16, 9, 6],
  [13, 11, 2, 5],
];

export const THEME = "Golf";
