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


export const GAME_NUMBER = 65;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B', 2: 'OO', 3: 'T', 4: 'H',
  5: 'CZ', 6: 'OL', 7: 'GO', 8: 'SZ',
  9: 'GU', 10: 'IT', 11: 'EA', 12: 'U',
  13: 'O', 14: 'SW', 15: 'AL', 16: 'D'
};
export const SCRAMBLE = [
  [6, 2, 3, 12],
  [11, 5, 10, 9],
  [8, 13, 16, 4],
  [7, 14, 1, 15],
];

export const THEME = "Exec. Eliminators";
