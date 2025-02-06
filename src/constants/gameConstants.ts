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


export const GAME_NUMBER = 84;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B ', 2: 'A', 3: 'N', 4: 'D',
  5: 'F', 6: 'I', 7: 'L', 8: 'M',
  9: 'R', 10: 'E', 11: 'E', 12: 'L',
  13: 'R', 14: 'O', 15: 'L', 16: 'L'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 16, 12],
  [8, 13, 5, 15],
  [7, 14, 4, 1],
];

export const THEME = "Tape";