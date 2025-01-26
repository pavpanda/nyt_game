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


export const GAME_NUMBER = 73;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'I', 3: 'T', 4: 'Y',
  5: 'F', 6: 'I', 7: 'R', 8: 'E',
  9: 'L', 10: 'O', 11: 'O', 12: 'P',
  13: 'W', 14: 'I', 15: 'N', 16: 'D'
};
export const SCRAMBLE = [
  [2, 6, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 4],
  [7, 13, 1, 15],
];

export const THEME = "Chicago";
