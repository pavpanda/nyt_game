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


export const GAME_NUMBER = 78;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'I', 3: 'M', 4: 'E',
  5: 'NI', 6: 'C', 7: 'KE', 8: 'L',
  9: 'PE', 10: 'N', 11: 'N', 12: 'Y',
  13: 'QU', 14: 'A', 15: 'RT', 16: 'ER'
};
export const SCRAMBLE = [
  [6, 10, 16, 9],
  [11, 2, 3, 12],
  [8, 5, 14, 15],
  [7, 13, 4, 1],
];

export const THEME = "Coins";