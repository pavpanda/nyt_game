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



export const GAME_NUMBER = 20;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'E', 3: 'A', 4: 'L',
  5: 'J', 6: 'A', 7: 'I', 8: 'L',
  9: 'R', 10: 'O', 11: 'O', 12: 'M',
  13: 'S', 14: 'H', 15: 'O', 16: 'P'
};
export const SCRAMBLE = [
  [10, 3, 15, 7],
  [8, 12, 4, 14],
  [1, 16, 9, 6],
  [13, 11, 2, 5],
];

export const THEME = "Closable/lockable";
