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



export const GAME_NUMBER = 12;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'I', 3: 'L', 4: 'L',
  5: 'E', 6: 'L', 7: 'O', 8: 'N',
  9: 'J', 10: 'E', 11: 'F', 12: 'F',
  13: 'M', 14: 'A', 15: 'R', 16: 'K'
};
export const SCRAMBLE = [
  [5, 12, 9, 16],
  [14, 7, 1, 10],
  [6, 15, 3, 11],
  [2, 13, 8, 4],
];
export const THEME = "Big Tech Founders";
