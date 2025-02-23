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


export const GAME_NUMBER = 95;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'O', 3: 'R', 4: 'A',
  5: 'J', 6: 'E', 7: 'RR', 8: 'Y',
  9: 'MI', 10: 'CK', 11: 'E', 12: 'Y',
  13: 'P', 14: 'E', 15: 'PP', 16: 'A'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Children's TV";
