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


export const GAME_NUMBER = 80;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'CR', 2: 'U', 3: 'I', 4: 'SE',
  5: 'D', 6: 'E', 7: 'P', 8: 'P',
  9: 'F', 10: 'O', 11: 'X', 12: 'X',
  13: 'W', 14: 'AL', 15: 'KE', 16: 'N'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 16, 12],
  [8, 14, 5, 15],
  [7, 13, 4, 1],
];

export const THEME = "Actors' surnames";