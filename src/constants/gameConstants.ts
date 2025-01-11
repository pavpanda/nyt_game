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


export const GAME_NUMBER = 60;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'G', 2: 'O', 3: 'A', 4: 'L',
  5: 'L', 6: 'I', 7: 'N', 8: 'E',
  9: 'P', 10: 'A', 11: 'S', 12: 'S',
  13: 'T', 14: 'E', 15: 'A', 16: 'M'
};
export const SCRAMBLE = [
  [13, 5, 6, 1],
  [3, 14, 10, 8],
  [7, 11, 16, 4],
  [9, 12, 2, 15],
];

export const THEME = "Hockey";
