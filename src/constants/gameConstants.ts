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


export const GAME_NUMBER = 101;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'GL', 2: 'O', 3: 'VE', 4: 'S',
  5: 'SH', 6: 'OV', 7: 'E', 8: 'L',
  9: 'TR', 10: 'O', 11: 'WE', 12: 'L',
  13: 'WEE', 14: 'D', 15: 'E', 16: 'R'  
};
export const SCRAMBLE = [
  [10, 6, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Gardener's Essentials";
