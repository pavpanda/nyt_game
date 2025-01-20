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


export const GAME_NUMBER = 68;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'I', 3: 'DE', 4: 'N',
  5: 'H', 6: 'AR', 7: 'RI', 8: 'S',
  9: 'P', 10: 'E', 11: 'NC', 12: 'E',
  13: 'V', 14: 'AN', 15: 'C', 16: 'E'
};
export const SCRAMBLE = [
  [2, 6, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 4],
  [7, 13, 1, 15],
];

export const THEME = "Recent VPs";
