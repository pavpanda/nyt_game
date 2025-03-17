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


export const GAME_NUMBER = 106;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'L', 2: 'I', 3: 'F', 4: 'T',
  5: 'S', 6: 'W', 7: 'I', 8: 'M',
  9: 'W', 10: 'A', 11: 'L', 12: 'K',
  13: 'Y', 14: 'O', 15: 'G', 16: 'A'  
};
export const SCRAMBLE = [
  [10, 6, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Stay fit";
