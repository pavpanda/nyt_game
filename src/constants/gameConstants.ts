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


export const GAME_NUMBER = 77;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'CH', 2: 'A', 3: 'L', 4: 'K',
  5: 'LE', 6: 'CT', 7: 'UR', 8: 'E',
  9: 'R', 10: 'O', 11: 'O', 12: 'M',
  13: 'ST', 14: 'UD', 15: 'EN', 16: 'T'
};
export const SCRAMBLE = [
  [6, 10, 3, 9],
  [11, 2, 16, 12],
  [8, 5, 14, 15],
  [7, 13, 1, 4],
];

export const THEME = "In class";


// CHALK, LECTURE, ROOM, STUDENT