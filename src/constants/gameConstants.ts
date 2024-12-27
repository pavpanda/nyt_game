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


export const GAME_NUMBER = 46;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'I', 2: 'D', 3: 'L', 4: 'E',
  5: 'L', 6: 'A', 7: 'Z', 8: 'E',
  9: 'L', 10: 'O', 11: 'A', 12: 'F',
  13: 'L', 14: 'O', 15: 'L', 16: 'L'
};
export const SCRAMBLE = [
  [4, 11, 1, 16],
  [3, 14, 7, 8],
  [10, 13, 2, 6],
  [12, 9, 15, 5],
];

export const THEME = "Doing nothing";
