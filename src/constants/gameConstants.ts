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


export const GAME_NUMBER = 86;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'BR', 2: 'U', 3: 'S', 4: 'H',
  5: 'M', 6: 'AK', 7: 'EU', 8: 'P',
  9: 'M', 10: 'I', 11: 'RR', 12: 'OR',
  13: 'O', 14: 'UT', 15: 'FI', 16: 'T'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 16, 12],
  [8, 4, 5, 15],
  [7, 14, 13, 1],
];

export const THEME = "Getting Dressed";