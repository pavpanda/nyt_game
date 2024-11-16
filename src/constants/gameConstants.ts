import { Grid, TouchDragState } from '../types/types';

export const GAME_NUMBER = 5;
export const LINK = "www.flipisfun.com";

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'A', 3: 'L', 4: 'L',
  5: 'F', 6: 'O', 7: 'U', 8: 'L',
  9: 'G', 10: 'O', 11: 'A', 12: 'L',
  13: 'P', 14: 'L', 15: 'A', 16: 'Y'
};

export const SOLUTION: Grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export const SCRAMBLE = [
  [10, 4, 16, 13],
  [7, 14, 8, 3],
  [2, 12, 5, 6],
  [9, 1, 15, 11],
];

export const THEME = "Sports";

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