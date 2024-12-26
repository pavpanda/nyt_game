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


export const GAME_NUMBER = 45;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'I', 2: 'R', 3: 'O', 4: 'N',
  5: 'L', 6: 'E', 7: 'A', 8: 'D',
  9: 'N', 10: 'E', 11: 'O', 12: 'N',
  13: 'Z', 14: 'I', 15: 'N', 16: 'C'
};
export const SCRAMBLE = [
  [11, 4, 1, 16],
  [3, 14, 7, 8],
  [10, 13, 2, 6],
  [12, 9, 15, 5],
];

export const THEME = "Alchemist's Lexicon";
