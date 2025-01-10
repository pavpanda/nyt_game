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


export const GAME_NUMBER = 59;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'F', 2: 'U', 3: 'N', 4: 'K',
  5: 'J', 6: 'A', 7: 'Z', 8: 'Z',
  9: 'P', 10: 'U', 11: 'N', 12: 'K',
  13: 'R', 14: 'O', 15: 'C', 16: 'K'
};
export const SCRAMBLE = [
  [13, 14, 6, 1],
  [3, 5, 10, 8],
  [7, 11, 16, 4],
  [9, 12, 2, 15],
];

export const THEME = "Music to my ears";
