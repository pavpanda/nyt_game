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


export const GAME_NUMBER = 49;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'A', 3: 'L', 4: 'M',
  5: 'C', 6: 'O', 7: 'O', 8: 'L',
  9: 'H', 10: 'U', 11: 'S', 12: 'H',
  13: 'R', 14: 'E', 15: 'S', 16: 'T'
};
export const SCRAMBLE = [
  [4, 14, 1, 16],
  [3, 13, 8, 7],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Take it easy";
