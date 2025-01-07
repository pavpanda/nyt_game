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


export const GAME_NUMBER = 56;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'I', 3: 'K', 4: 'E',
  5: 'B', 6: 'O', 7: 'A', 8: 'T',
  9: 'S', 10: 'H', 11: 'I', 12: 'P',
  13: 'T', 14: 'A', 15: 'X', 16: 'I'
};
export const SCRAMBLE = [
  [14, 13, 7, 1],
  [3, 5, 8, 6],
  [10, 11, 4, 16],
  [9, 12, 2, 15],
];

export const THEME = "Let's go!";
