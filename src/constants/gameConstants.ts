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


export const GAME_NUMBER = 79;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'G', 2: 'O', 3: 'L', 4: 'D',
  5: 'H', 6: 'O', 7: 'O', 8: 'K',
  9: 'P', 10: 'A', 11: 'TC', 12: 'H',
  13: 'SW', 14: 'O', 15: 'R', 16: 'D'
};
export const SCRAMBLE = [
  [6, 10, 16, 9],
  [11, 2, 3, 12],
  [8, 5, 14, 15],
  [7, 13, 4, 1],
];

export const THEME = "Pirate Picks";