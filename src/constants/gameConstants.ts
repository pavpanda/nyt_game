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



export const GAME_NUMBER = 35;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'A', 3: 'K', 4: 'E',
  5: 'C', 6: 'A', 7: 'R', 8: 'D',
  9: 'G', 10: 'I', 11: 'F', 12: 'T',
  13: 'W', 14: 'I', 15: 'S', 16: 'H'
};
export const SCRAMBLE = [
  [11, 1, 15, 2],
  [13, 10, 8, 7],
  [16, 14, 3, 4],
  [6, 9, 5, 12],
];

export const THEME = "Birthday";
