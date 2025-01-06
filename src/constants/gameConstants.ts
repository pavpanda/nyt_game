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


export const GAME_NUMBER = 55;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'O', 3: 'A', 4: 'Z',
  5: 'J', 6: 'O', 7: 'H', 8: 'N',
  9: 'M', 10: 'A', 11: 'R', 12: 'Y',
  13: 'N', 14: 'O', 15: 'A', 16: 'H'
};
export const SCRAMBLE = [
  [14, 13, 7, 1],
  [3, 4, 8, 16],
  [10, 11, 5, 6],
  [9, 12, 2, 15],
];

export const THEME = "Biblical Names";
