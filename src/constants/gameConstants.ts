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


export const GAME_NUMBER = 88;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'E', 2: 'P', 3: 'I', 4: 'C',
  5: 'M', 6: 'Y', 7: 'T', 8: 'H',
  9: 'S', 10: 'A', 11: 'G', 12: 'A',
  13: 'T', 14: 'A', 15: 'L', 16: 'E'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 16, 12],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Story";

//epic myth sage tale  