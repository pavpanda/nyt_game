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


export const GAME_NUMBER = 64;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', 2: 'D', 3: 'Z', 4: 'E',
  5: 'F', 6: 'I', 7: 'R', 8: 'E',
  9: 'G', 10: 'R', 11: 'U', 12: 'B',
  13: 'P', 14: 'I', 15: 'C', 16: 'K'
};
export const SCRAMBLE = [
  [6, 3, 1, 12],
  [13, 5, 10, 8],
  [9, 11, 16, 4],
  [7, 14, 2, 15],
];

export const THEME = "Axe";
