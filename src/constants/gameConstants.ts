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


export const GAME_NUMBER = 90;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'BE', 2: 'LO', 3: 'VE', 4: 'D',
  5: 'C', 6: 'A', 7: 'R', 8: 'E',
  9: 'L', 10: 'O', 11: 'V', 12: 'E',
  13: 'W', 14: 'A', 15: 'RM', 16: 'TH'
};
export const SCRAMBLE = [
  [6, 10, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Valentine";