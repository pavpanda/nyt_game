import { Grid, TouchDragState } from '../types/types';

export const LINK = "https://flipisfun.com";
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


export const GAME_NUMBER = 81;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'A', 3: 'S', 4: 'T',
  5: 'H', 6: 'A', 7: 'R', 8: 'D',
  9: 'S', 10: 'M', 11: 'AR', 12: 'T',
  13: 'TO', 14: 'GE', 15: 'TH', 16: 'ER'
};
export const SCRAMBLE = [
  [6, 3, 10, 9],
  [11, 2, 16, 12],
  [8, 13, 5, 15],
  [7, 14, 4, 1],
];

export const THEME = "Let's work...";