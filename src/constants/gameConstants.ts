import { Grid, TouchDragState } from '../types/types';

export const LINK = "www.flipisfun.com";
export const NUM_ROWS = 4;

export const GAME_NUMBER = 8;

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'E', 2: 'M', 3: 'I', 4: 'T',
  5: 'I', 6: 'T', 7: 'E', 8: 'M',
  9: 'M', 10: 'I', 11: 'T', 12: 'E',
  13: 'T', 14: 'I', 15: 'M', 16: 'E'
};

export const SCRAMBLE = [
  [11, 15, 1, 10],
  [7, 12, 14, 3],
  [2, 8, 5, 6],
  [9, 16, 4, 13],
];

export const THEME = "Related, altered";

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