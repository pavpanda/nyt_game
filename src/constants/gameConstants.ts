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


export const GAME_NUMBER = 100;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'BE', 2: 'A', 3: 'VE', 4: 'R',
  5: 'CA', 6: 'M', 7: 'E', 8: 'L',
  9: 'M', 10: 'OO', 11: 'S', 12: 'E',
  13: 'TU', 14: 'R', 15: 'T', 16: 'LE'  
};
export const SCRAMBLE = [
  [10, 6, 3, 9],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Eating Plants";
