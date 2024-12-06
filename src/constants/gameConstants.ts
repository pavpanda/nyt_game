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



export const GAME_NUMBER = 25;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'U', 3: 'R', 4: 'Y',
  5: 'H', 6: 'I', 7: 'D', 8: 'E',
  9: 'M', 10: 'A', 11: 'S', 12: 'K',
  13: 'V', 14: 'E', 15: 'I', 16: 'L'
};
export const SCRAMBLE = [
  [13, 11, 3, 10],
  [1, 16, 4, 14],
  [8, 12, 9, 6],
  [5, 2, 15, 7],
];

export const THEME = "Quick, out of sight!";
