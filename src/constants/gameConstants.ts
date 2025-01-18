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


export const GAME_NUMBER = 66;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'HR', 3: 'O', 4: 'ME',
  5: 'E', 6: 'D', 7: 'G', 8: 'E',
  9: 'FI', 10: 'RE', 11: 'FO', 12: 'X',
  13: 'S', 14: 'AF', 15: 'AR', 16: 'I'
};
export const SCRAMBLE = [
  [6, 2, 3, 9],
  [11, 5, 16, 12],
  [8, 14, 10, 4],
  [7, 13, 1, 15],
];

export const THEME = "Search";
