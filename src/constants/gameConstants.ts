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


export const GAME_NUMBER = 70;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'E', 3: 'S', 4: 'T',
  5: 'FL', 6: 'AW', 7: 'LE', 8: 'SS',
  9: 'I', 10: 'DE', 11: 'A', 12: 'L',
  13: 'P', 14: 'ER', 15: 'FE', 16: 'CT'
};
export const SCRAMBLE = [
  [2, 3, 6, 9],
  [11, 14, 16, 12],
  [8, 10, 5, 4],
  [7, 13, 1, 15],
];

export const THEME = "Awesome";
