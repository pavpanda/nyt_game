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



export const GAME_NUMBER = 29;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'BL', 2: 'U', 3: 'E', 4: 'S',
  5: 'DU', 6: 'B', 7: 'ST', 8: 'EP',
  9: 'F', 10: 'U', 11: 'N', 12: 'K',
  13: 'RE', 14: 'G', 15: 'GA', 16: 'E'
};
export const SCRAMBLE = [
  [2, 15, 9, 11],
  [13, 3, 8, 7],
  [4, 14, 10, 16],
  [6, 1, 5, 12],
];

export const THEME = "Musical Genres";
