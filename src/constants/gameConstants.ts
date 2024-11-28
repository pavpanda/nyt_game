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



export const GAME_NUMBER = 17;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'H', 2: 'A', 3: 'I', 4: 'L',
  5: 'R', 6: 'A', 7: 'I', 8: 'N',
  9: 'S', 10: 'N', 11: 'O', 12: 'W',
  13: 'W', 14: 'I', 15: 'N', 16: 'D'
};
export const SCRAMBLE = [
  [3, 14, 8, 11],
  [16, 7, 6, 1],
  [12, 5, 10, 2],
  [13, 9, 15, 4],
];
export const THEME = "Nature's Mood Swings";
