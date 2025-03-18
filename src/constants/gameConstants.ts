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


export const GAME_NUMBER = 107;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'A', 3: 'S', 4: 'H',
  5: 'F', 6: 'A', 7: 'S', 8: 'T',
  9: 'F', 10: 'L', 11: 'O', 12: 'W',
  13: 'Z', 14: 'O', 15: 'O', 16: 'M'  
};
export const SCRAMBLE = [
  [10, 6, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Speed";
