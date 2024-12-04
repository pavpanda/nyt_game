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



export const GAME_NUMBER = 23;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'CH', 2: 'O', 3: 'RT', 4: 'LE',
  5: 'G', 6: 'UF', 7: 'F', 8: 'AW',
  9: 'L', 10: 'AU', 11: 'G', 12: 'H',
  13: 'SN', 14: 'IC', 15: 'KE', 16: 'R'
};
export const SCRAMBLE = [
  [13, 15, 3, 10],
  [1, 12, 4, 14],
  [8, 16, 9, 6],
  [7, 11, 2, 5],
];

export const THEME = "Hahahaha!";
