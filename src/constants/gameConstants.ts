import { Grid, TouchDragState } from '../types/types';

export const LINK = "www.flipisfun.com";
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


export const GAME_NUMBER = 41;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'R', 3: 'O', 4: 'P',
  5: 'F', 6: 'A', 7: 'L', 8: 'L',
  9: 'P', 10: 'A', 11: 'R', 12: 'K',
  13: 'T', 14: 'A', 15: 'X', 16: 'I'
};
export const SCRAMBLE = [
  [10, 1, 4, 11],
  [16, 14, 8, 7],
  [3, 13, 2, 6],
  [12, 9, 15, 5],
];

export const THEME = "Water...";
