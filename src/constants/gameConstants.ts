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



export const GAME_NUMBER = 21;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', 2: 'R', 3: 'G', 4: 'O',
  5: 'C', 6: 'A', 7: 'R', 8: 'S',
  9: 'D', 10: 'U', 11: 'N', 12: 'E',
  13: 'J', 14: 'A', 15: 'W', 16: 'S'
};
export const SCRAMBLE = [
  [7, 15, 3, 10],
  [8, 12, 4, 14],
  [1, 16, 9, 6],
  [13, 11, 2, 5],
];

export const THEME = "Movie Hits!";
