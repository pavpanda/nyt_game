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



export const GAME_NUMBER = 27;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'E', 3: 'E', 4: 'R',
  5: 'M', 6: 'I', 7: 'L', 8: 'K',
  9: 'S', 10: 'O', 11: 'D', 12: 'A',
  13: 'W', 14: 'I', 15: 'N', 16: 'E'
};
export const SCRAMBLE = [
  [12, 15, 9, 11],
  [4, 3, 10, 7],
  [13, 14, 8, 16],
  [2, 5, 1, 6],
];

export const THEME = "Bottoms Up";
