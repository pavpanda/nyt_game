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


export const GAME_NUMBER = 108;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'D', 2: 'A', 3: 'NC', 4: 'E',
  5: 'H', 6: 'I', 7: 'K', 8: 'E',
  9: 'M', 10: 'U', 11: 'SI', 12: 'C',
  13: 'PA', 14: 'I', 15: 'N', 16: 'T'  
};
export const SCRAMBLE = [
  [10, 6, 9, 3],
  [11, 2, 12, 16],
  [8, 4, 5, 15],
  [7, 14, 1, 13],
];

export const THEME = "Hobbies";
