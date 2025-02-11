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


export const GAME_NUMBER = 87;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'E', 3: 'E', 4: 'L',
  5: 'H', 6: 'O', 7: 'L', 8: 'D',
  9: 'M', 10: 'U', 11: 'S', 12: 'E',
  13: 'W', 14: 'E', 15: 'E', 16: 'N'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 16, 12],
  [8, 4, 5, 15],
  [7, 14, 13, 1],
];

export const THEME = "Think";

// hold feel ween muse