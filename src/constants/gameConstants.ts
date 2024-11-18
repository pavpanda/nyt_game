import { Grid, TouchDragState } from '../types/types';

export const LINK = "www.flipisfun.com";
export const NUM_ROWS = 4;

export const GAME_NUMBER = 7;

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'E', 2: 'V', 3: 'I', 4: 'L',
  5: 'S', 6: 'P', 7: 'I', 8: 'T',
  9: 'S', 10: 'T', 11: 'A', 12: 'R',
  13: 'W', 14: 'O', 15: 'L', 16: 'F'
};

export const SCRAMBLE = [
  [13, 1, 15, 11],
  [7, 12, 14, 2],
  [6, 5, 8, 3],
  [9, 16, 4, 10],
];

export const THEME = "Words that flip into words";

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