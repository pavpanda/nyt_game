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


export const GAME_NUMBER = 83;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D ', 2: 'O', 3: 'Z', 4: 'Y',
  5: 'L', 6: 'A', 7: 'Z', 8: 'Y',
  9: 'L', 10: 'O', 11: 'G', 12: 'Y',
  13: 'Y', 14: 'A', 15: 'W', 16: 'N'
};
export const SCRAMBLE = [
  [6, 3, 10, 9],
  [11, 2, 16, 12],
  [8, 13, 5, 15],
  [7, 14, 4, 1],
];

export const THEME = "Sleepy";