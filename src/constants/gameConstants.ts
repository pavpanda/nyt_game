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


export const GAME_NUMBER = 98;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'BA', 2: 'G', 3: 'E', 4: 'L',
  5: 'DO', 6: 'N', 7: 'U', 8: 'T',
  9: 'FR', 10: 'U', 11: 'I', 12: 'T',
  13: 'MU', 14: 'FF', 15: 'I', 16: 'N'  
};
export const SCRAMBLE = [
  [10, 6, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Breakfast";
