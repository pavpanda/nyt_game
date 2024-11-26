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



export const GAME_NUMBER = 15;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'C ', 2: 'L', 3: 'U', 4: 'B',
  5: 'D', 6: 'E', 7: 'C', 8: 'K',
  9: 'H', 10: 'A', 11: 'N', 12: 'D',
  13: 'J', 14: 'A', 15: 'C', 16: 'K'
};
export const SCRAMBLE = [
  [3, 15, 9, 12],
  [7, 2, 13, 5],
  [10, 14, 1, 16],
  [8, 11, 6, 4],
];
export const THEME = "We're playing poker. What do you see?";
