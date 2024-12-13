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



export const GAME_NUMBER = 32;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'H', 3: 'A', 4: 'D',
  5: 'F', 6: 'I', 7: 'J', 8: 'I',
  9: 'L', 10: 'A', 11: 'O', 12: 'S',
  13: 'T', 14: 'O', 15: 'G', 16: 'O'
};
export const SCRAMBLE = [
  [11, 1, 15, 2],
  [13, 14, 8, 7],
  [4, 3, 10, 16],
  [6, 9, 5, 12],
];

export const THEME = "Countries!";
