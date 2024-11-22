import { Grid, TouchDragState } from '../types/types';

export const LINK = "www.flipisfun.com";
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



export const GAME_NUMBER = 10;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'I', 2: 'R', 3: 'I', 4: 'S',
  5: 'J', 6: 'A', 7: 'D', 8: 'E',
  9: 'R', 10: 'O', 11: 'S', 12: 'E',
  13: 'S', 14: 'A', 15: 'G', 16: 'E'
};
export const SCRAMBLE = [
  [11, 8, 12, 13],
  [4, 10, 3, 5],
  [9, 7, 16, 14],
  [6, 1, 2, 15],
];
export const THEME = "Floral Names";
