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


export const GAME_NUMBER = 105;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'CL', 2: 'OV', 3: 'E', 4: 'R',
  5: 'G', 6: 'RE', 7: 'E', 8: 'N',
  9: 'L', 10: 'U', 11: 'C', 12: 'K',
  13: 'PA', 14: 'RA', 15: 'D', 16: 'E'  
};
export const SCRAMBLE = [
  [10, 6, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "St. Patrick's";
