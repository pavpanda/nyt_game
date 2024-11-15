import { Grid, TouchDragState } from '../types/types';

export const GAME_NUMBER = 4;
export const LINK = "pavpanda.github.io/nyt_game";

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'c', 2: 'o', 3: 'p', 4: 'y',
  5: 'e', 6: 'c', 7: 'h', 8: 'o',
  9: 'l', 10: 'o', 11: 'o', 12: 'p',
  13: 'r', 14: 'e', 15: 'd', 16: 'o'
};

export const SOLUTION: Grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export const SCRAMBLE = [
  [9, 1, 15, 11],
  [10, 4, 16, 13],
  [7, 14, 8, 3],
  [2, 12, 5, 6],
];

export const THEME = "Again and again";

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