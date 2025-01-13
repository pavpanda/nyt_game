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


export const GAME_NUMBER = 62;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'O', 3: 'R', 4: 'D',
  5: 'H', 6: 'A', 7: 'I', 8: 'R',
  9: 'R', 10: 'O', 11: 'P', 12: 'E',
  13: 'W', 14: 'I', 15: 'R', 16: 'E'
};
export const SCRAMBLE = [
  [3, 12, 6, 1],
  [13, 14, 10, 8],
  [9, 11, 16, 4],
  [7, 5, 2, 15],
];

export const THEME = "Tangled";
