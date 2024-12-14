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



export const GAME_NUMBER = 33;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'O', 3: 'R', 4: 'Y',
  5: 'E', 6: 'L', 7: 'S', 8: 'A',
  9: 'M', 10: 'A', 11: 'U', 12: 'I',
  13: 'N', 14: 'A', 15: 'L', 16: 'A'
};
export const SCRAMBLE = [
  [2, 15, 1, 11],
  [13, 14, 8, 7],
  [4, 3, 10, 16],
  [6, 9, 5, 12],
];

export const THEME = "Animated Characters";
