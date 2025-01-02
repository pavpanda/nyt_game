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


export const GAME_NUMBER = 51;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'A', 3: 'B', 4: 'E',
  5: 'B', 6: 'A', 7: 'B', 8: 'Y',
  9: 'D', 10: 'E', 11: 'A', 12: 'R',
  13: 'L', 14: 'O', 15: 'V', 16: 'E'
};
export const SCRAMBLE = [
  [4, 14, 1, 7],
  [3, 13, 8, 16],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Affectionate";
