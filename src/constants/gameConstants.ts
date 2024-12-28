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


export const GAME_NUMBER = 47;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'G', 2: 'A', 3: 'L', 4: 'E',
  5: 'G', 6: 'U', 7: 'S', 8: 'T',
  9: 'P', 10: 'U', 11: 'F', 12: 'F',
  13: 'W', 14: 'A', 15: 'F', 16: 'T'
};
export const SCRAMBLE = [
  [4, 14, 1, 16],
  [3, 11, 8, 7],
  [10, 13, 2, 6],
  [12, 9, 15, 5],
];

export const THEME = "  Air Movement";
