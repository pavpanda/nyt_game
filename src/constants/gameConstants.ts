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
  1: 'C', 2: 'R', 3: 'A', 4: 'B',
  5: 'F', 6: 'I', 7: 'S', 8: 'H',
  9: 'R', 10: 'E', 11: 'E', 12: 'F',
  13: 'S', 14: 'E', 15: 'A', 16: 'L'
};
export const SCRAMBLE = [
  [7, 11, 2, 16],
  [5, 13, 10, 1],
  [14, 4, 9, 6],
  [12, 8, 3, 15],
];
export const THEME = "In the ocean!";
