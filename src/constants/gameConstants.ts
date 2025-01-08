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
  1: 'A', 2: 'C', 3: 'D', 4: 'C',
  5: 'K', 6: 'I', 7: 'S', 8: 'S',
  9: 'R', 10: 'U', 11: 'S', 12: 'H',
  13: 'T', 14: 'O', 15: 'T', 16: 'O'
};
export const SCRAMBLE = [
  [13, 14, 7, 1],
  [3, 5, 8, 6],
  [10, 11, 4, 16],
  [9, 12, 2, 15],
];

export const THEME = "Bands";
