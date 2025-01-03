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


export const GAME_NUMBER = 52;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'A', 3: 'C', 4: 'K',
  5: 'R', 6: 'A', 7: 'I', 8: 'L',
  9: 'S', 10: 'H', 11: 'I', 12: 'P',
  13: 'V', 14: 'I', 15: 'N', 16: 'E'
};
export const SCRAMBLE = [
  [4, 14, 7, 1],
  [3, 13, 8, 16],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Yard";
