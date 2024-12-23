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


export const GAME_NUMBER = 42;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'I', 3: 'T', 4: 'E',
  5: 'C', 6: 'H', 7: 'E', 8: 'W',
  9: 'P', 10: 'U', 11: 'K', 12: 'E',
  13: 'S', 14: 'P', 15: 'I', 16: 'T'
};
export const SCRAMBLE = [
  [16, 1, 4, 11],
  [10, 14, 8, 7],
  [3, 13, 2, 6],
  [12, 9, 15, 5],
];

export const THEME = "Food actions";
