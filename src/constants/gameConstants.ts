import { Grid, TouchDragState } from '../types/types';

export const GAME_NUMBER = 3;
export const LINK = "pavpanda.github.io/nyt_game";

export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'k', 2: 'i', 3: 'w', 4: 'i',
  5: 'l', 6: 'i', 7: 'm', 8: 'e',
  9: 'p', 10: 'e', 11: 'a', 12: 'r',
  13: 'p', 14: 'l', 15: 'u', 16: 'm'
};

export const SOLUTION: Grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export const SCRAMBLE = [
  [2, 1, 5, 6],
  [9, 12, 15, 11],
  [10, 14, 16, 13],
  [7, 4, 8, 3],
];

export const THEME = "Fruits";

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