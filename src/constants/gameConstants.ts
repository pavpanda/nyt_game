import { Grid, TouchDragState } from '../types/types';

export const LINK = "https://flipisfun.com";
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


export const GAME_NUMBER = 58;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'I', 3: 'L', 4: 'A',
  5: 'I', 6: 'K', 7: 'E', 8: 'A',
  9: 'L', 10: 'E', 11: 'G', 12: 'O',
  13: 'N', 14: 'I', 15: 'K', 16: 'E'
};
export const SCRAMBLE = [
  [13, 14, 7, 1],
  [3, 5, 8, 6],
  [10, 11, 4, 16],
  [9, 12, 2, 15],
];

export const THEME = "Companies";
