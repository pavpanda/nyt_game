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


export const GAME_NUMBER = 39;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'O', 3: 'H', 4: 'R',
  5: 'B', 6: 'O', 7: 'S', 8: 'E',
  9: 'H', 10: 'A', 11: 'H', 12: 'N',
  13: 'R', 14: 'A', 15: 'B', 16: 'I'
};
export const SCRAMBLE = [
  [10, 1, 15, 11],
  [16, 2, 8, 7],
  [3, 13, 14, 6],
  [12, 9, 4, 5],
];

export const THEME = "Scientists";
