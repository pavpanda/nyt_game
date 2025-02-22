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


export const GAME_NUMBER = 94;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'I', 3: 'O', 4: 'S',
  5: 'D', 6: 'I', 7: 'S', 8: 'K',
  9: 'S', 10: 'I', 11: 'T', 12: 'E',
  13: 'T', 14: 'E', 15: 'C', 16: 'H'
};
export const SCRAMBLE = [
  [6, 10, 3, 16],
  [11, 2, 12, 9],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Computers";
