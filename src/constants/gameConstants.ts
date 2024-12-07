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



export const GAME_NUMBER = 26;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'O', 3: 'N', 4: 'D',
  5: 'D', 6: 'E', 7: 'A', 8: 'L',
  9: 'L', 10: 'I', 11: 'N', 12: 'K',
  13: 'O', 14: 'A', 15: 'T', 16: 'H'
};
export const SCRAMBLE = [
  [10, 3, 11, 13],
  [1, 16, 4, 14],
  [8, 12, 9, 6],
  [5, 2, 15, 7],
];

export const THEME = "Stronger When Shared";
