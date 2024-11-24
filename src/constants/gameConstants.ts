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



export const GAME_NUMBER = 13;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'L', 3: 'U', 4: 'E',
  5: 'B', 6: 'R', 7: 'I', 8: 'E',
  9: 'F', 10: 'E', 11: 'T', 12: 'A',
  13: 'P', 14: 'A', 15: 'R', 16: 'M'
};
export const SCRAMBLE = [
  [13, 2, 15, 6],
  [9, 12, 4, 11],
  [1, 14, 7, 10],
  [8, 16, 5, 3],
];
export const THEME = "Cheese!";
