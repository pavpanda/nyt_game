import { Grid, TouchDragState } from '../types/types';

export const LINK = "www.flipisfun.com";

export const GAME_NUMBER = 5;

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'E', 3: 'A', 4: 'T',
  5: 'N', 6: 'O', 7: 'T', 8: 'E',
  9: 'S', 10: 'O', 11: 'N', 12: 'G',
  13: 'T', 14: 'U', 15: 'N', 16: 'E'
};

export const SCRAMBLE = [
  [13, 1, 15, 11],
  [7, 12, 14, 2],
  [6, 5, 8, 3],
  [9, 16, 4, 10],
];

export const THEME = "Do, re, mi...";

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