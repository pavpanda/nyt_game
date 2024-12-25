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


export const GAME_NUMBER = 43;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'G', 2: 'A', 3: 'Z', 4: 'E',
  5: 'O', 6: 'P', 7: 'E', 8: 'N',
  9: 'R', 10: 'O', 11: 'L', 12: 'L',
  13: 'W', 14: 'I', 15: 'N', 16: 'K'
};
export const SCRAMBLE = [
  [16, 4, 1, 11],
  [3, 14, 7, 8],
  [10, 13, 2, 6],
  [12, 9, 15, 5],
];

export const THEME = "👀";
