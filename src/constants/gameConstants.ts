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


export const GAME_NUMBER = 61;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'E', 2: 'R', 3: 'I', 4: 'S',
  5: 'M', 6: 'A', 7: 'R', 8: 'S',
  9: 'M', 10: 'O', 11: 'O', 12: 'N',
  13: 'S', 14: 'T', 15: 'A', 16: 'R'
};
export const SCRAMBLE = [
  [13, 12, 6, 1],
  [3, 14, 10, 8],
  [7, 11, 16, 4],
  [9, 5, 2, 15],
];

export const THEME = "Up Above";
