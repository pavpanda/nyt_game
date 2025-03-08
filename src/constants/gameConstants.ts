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


export const GAME_NUMBER = 102;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'P', 2: 'A', 3: 'C', 4: 'K',
  5: 'P', 6: 'E', 7: 'A', 8: 'K',
  9: 'T', 10: 'R', 11: 'E', 12: 'K',
  13: 'W', 14: 'A', 15: 'L', 16: 'K'  
};
export const SCRAMBLE = [
  [10, 6, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Hiking 101";
