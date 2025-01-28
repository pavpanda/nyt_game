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


export const GAME_NUMBER = 75;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'EA', 3: 'S', 4: 'E',
  5: 'D', 6: 'I', 7: 'TC', 8: 'H',
  9: 'Q', 10: 'U', 11: 'I', 12: 'T',
  13: 'S', 14: 'T', 15: 'O', 16: 'P'
};
export const SCRAMBLE = [
  [2, 6, 3, 9],
  [11, 10, 16, 12],
  [8, 14, 5, 15],
  [7, 13, 1, 4],
];

export const THEME = "Give up";
