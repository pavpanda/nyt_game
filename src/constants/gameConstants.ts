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


export const GAME_NUMBER = 50;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'E', 3: 'A', 4: 'R',
  5: 'I', 6: 'D', 7: 'E', 8: 'A',
  9: 'L', 10: 'O', 11: 'V', 12: 'E',
  13: 'S', 14: 'O', 15: 'U', 16: 'L'
};
export const SCRAMBLE = [
  [4, 14, 1, 7],
  [3, 13, 8, 16],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Immaterial";
