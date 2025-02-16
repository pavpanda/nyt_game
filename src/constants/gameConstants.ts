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


export const GAME_NUMBER = 91;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C', 2: 'R', 3: 'A', 4: 'B',
  5: 'SU', 6: 'NS', 7: 'HI', 8: 'NE',
  9: 'TO', 10: 'W', 11: 'E', 12: 'L',
  13: 'UM', 14: 'BR', 15: 'EL', 16: 'LA'
};
export const SCRAMBLE = [
  [6, 10, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Beach";