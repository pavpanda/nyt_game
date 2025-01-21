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


export const GAME_NUMBER = 69;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'H', 2: 'O', 3: 'P', 4: 'E',
  5: 'L', 6: 'U', 7: 'C', 8: 'K',
  9: 'P', 10: 'R', 11: 'A', 12: 'Y',
  13: 'W', 14: 'I', 15: 'S', 16: 'H'
};
export const SCRAMBLE = [
  [2, 6, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 4],
  [7, 13, 1, 15],
];

export const THEME = "Cross your fingers";
