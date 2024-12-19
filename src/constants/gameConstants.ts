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



export const GAME_NUMBER = 38;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'E', 3: 'A', 4: 'R',
  5: 'D', 6: 'A', 7: 'R', 8: 'E',
  9: 'F', 10: 'A', 11: 'I', 12: 'R',
  13: 'H', 14: 'E', 15: 'I', 16: 'R'
};
export const SCRAMBLE = [
  [1, 10, 15, 12],
  [16, 2, 8, 7],
  [13, 14, 3, 6],
  [11, 9, 4, 5],
];

export const THEME = "Rhymes";
