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


export const GAME_NUMBER = 97;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'OS', 3: 'MO', 4: 'S',
  5: 'GA', 6: 'LA', 7: 'X', 8: 'Y',
  9: 'OR', 10: 'B', 11: 'I', 12: 'T',
  13: 'PL', 14: 'AN', 15: 'E', 16: 'T'
};
export const SCRAMBLE = [
  [10, 6, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Space";
