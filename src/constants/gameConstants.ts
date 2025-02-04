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


export const GAME_NUMBER = 82;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'E', 3: 'L', 4: 'L',
  5: 'C', 6: 'O', 7: 'A', 8: 'L',
  9: 'R', 10: 'A', 11: 'I', 12: 'L',
  13: 'T', 14: 'A', 15: 'N', 16: 'K'
};
export const SCRAMBLE = [
  [6, 3, 10, 9],
  [11, 2, 16, 12],
  [8, 13, 5, 15],
  [7, 14, 4, 1],
];

export const THEME = "Choo choo!";