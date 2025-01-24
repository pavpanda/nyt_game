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


export const GAME_NUMBER = 72;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'U', 3: 'S', 4: 'E',
  5: 'G', 6: 'R', 7: 'I', 8: 'D',
  9: 'V', 10: 'O', 11: 'L', 12: 'T',
  13: 'W', 14: 'A', 15: 'T', 16: 'T'
};
export const SCRAMBLE = [
  [2, 6, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 4],
  [7, 13, 1, 15],
];

export const THEME = "Electricity";
