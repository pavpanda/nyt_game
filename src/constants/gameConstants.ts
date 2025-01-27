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


export const GAME_NUMBER = 74;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'HI', 3: 'E', 4: 'F',
  5: 'M', 6: 'A', 7: 'JO', 8: 'R',
  9: 'PR', 10: 'I', 11: 'M', 12: 'E',
  13: 'V', 14: 'I', 15: 'T', 16: 'AL'
};
export const SCRAMBLE = [
  [2, 6, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 15],
  [7, 13, 1, 4],
];

export const THEME = "Important";
