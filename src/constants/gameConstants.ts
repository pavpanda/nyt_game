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



export const GAME_NUMBER = 22;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'L', 3: 'E', 4: 'A',
  5: 'L', 6: 'I', 7: 'C', 8: 'E',
  9: 'M', 10: 'O', 11: 'T', 12: 'H',
  13: 'W', 14: 'A', 15: 'S', 16: 'P'
};
export const SCRAMBLE = [
  [13, 15, 3, 10],
  [1, 12, 4, 14],
  [8, 16, 9, 6],
  [7, 11, 2, 5],
];

export const THEME = "Irritating Insects";
