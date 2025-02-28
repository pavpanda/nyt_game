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


export const GAME_NUMBER = 96;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'I', 3: 'V', 4: 'E',
  5: 'F', 6: 'E', 7: 'A', 8: 'R',
  9: 'K', 10: 'I', 11: 'S', 12: 'S',
  13: 'W', 14: 'I', 15: 'S', 16: 'H'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Eyes closed";
