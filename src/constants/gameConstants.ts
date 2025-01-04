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


export const GAME_NUMBER = 52;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', 2: 'U', 3: 'D', 4: 'I',
  5: 'B', 6: 'E', 7: 'N', 8: 'Z',
  9: 'F', 10: 'O', 11: 'R', 12: 'D',
  13: 'J', 14: 'E', 15: 'E', 16: 'P'
};
export const SCRAMBLE = [
  [14, 4, 7, 1],
  [3, 13, 8, 16],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Vroom vroom";
