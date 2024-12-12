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



export const GAME_NUMBER = 31;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'U', 3: 'S', 4: 'T',
  5: 'S', 6: 'A', 7: 'N', 8: 'D',
  9: 'S', 10: 'M', 11: 'O', 12: 'G',
  13: 'S', 14: 'N', 15: 'O', 16: 'W'
};
export const SCRAMBLE = [
  [11, 9, 15, 2],
  [13, 3, 8, 7],
  [4, 14, 10, 16],
  [6, 1, 5, 12],
];

export const THEME = "In the Air";
