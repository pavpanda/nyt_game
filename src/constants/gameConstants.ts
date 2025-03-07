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


export const GAME_NUMBER = 99;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'L', 3: 'OO', 4: 'M',
  5: 'CL', 6: 'OV', 7: 'E', 8: 'R',
  9: 'K', 10: 'I', 11: 'T', 12: 'E',
  13: 'SP', 14: 'RI', 15: 'N', 16: 'G'  
};
export const SCRAMBLE = [
  [10, 6, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "March";
