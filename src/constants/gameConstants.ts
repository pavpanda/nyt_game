import { Grid, TouchDragState } from '../types/types';

export const GAME_NUMBER = 5;
export const LINK = "www.flipisfun.com";

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'b', 2: 'a', 3: 'l', 4: 'l',
  5: 'f', 6: 'o', 7: 'u', 8: 'l',
  9: 'g', 10: 'o', 11: 'a', 12: 'l',
  13: 'p', 14: 'l', 15: 'a', 16: 'y'
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