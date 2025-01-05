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


export const GAME_NUMBER = 54;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'G', 2: 'O', 3: 'L', 4: 'D',
  5: 'J', 6: 'A', 7: 'D', 8: 'E',
  9: 'O', 10: 'P', 11: 'A', 12: 'L',
  13: 'R', 14: 'U', 15: 'B', 16: 'Y'
};
export const SCRAMBLE = [
  [14, 13, 7, 1],
  [3, 4, 8, 16],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Precious materials";
