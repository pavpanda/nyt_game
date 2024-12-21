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


export const GAME_NUMBER = 40;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'I', 3: 'V', 4: 'E',
  5: 'D', 6: 'R', 7: 'O', 8: 'P',
  9: 'F', 10: 'A', 11: 'L', 12: 'L',
  13: 'S', 14: 'I', 15: 'N', 16: 'K'
};
export const SCRAMBLE = [
  [1, 10, 15, 11],
  [16, 14, 8, 7],
  [3, 13, 2, 6],
  [12, 9, 4, 5],
];

export const THEME = "Down, down, down";
