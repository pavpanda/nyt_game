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


export const GAME_NUMBER = 76;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', 2: 'SC', 3: 'E', 4: 'ND',
  5: 'L', 6: 'I', 7: 'F', 8: 'T',
  9: 'R', 10: 'I', 11: 'S', 12: 'E',
  13: 'S', 14: 'O', 15: 'A', 16: 'R'
};
export const SCRAMBLE = [
  [6, 2, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 15],
  [7, 13, 1, 4],
];

export const THEME = "Go up";
