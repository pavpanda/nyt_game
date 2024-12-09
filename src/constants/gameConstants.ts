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



export const GAME_NUMBER = 28;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', 2: 'S', 3: 'A', 4: 'P',
  5: 'T', 6: 'T', 7: 'Y', 8: 'L',
  9: 'W', 10: 'D', 11: 'Y', 12: 'M',
  13: 'Y', 14: 'O', 15: 'L', 16: 'O'
};
export const SCRAMBLE = [
  [12, 15, 9, 11],
  [4, 3, 8, 7],
  [13, 14, 10, 16],
  [2, 5, 1, 6],
];

export const THEME = "Seen in Texts";
