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


export const GAME_NUMBER = 71;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'CA', 2: 'ND', 3: 'I', 4: 'D',
  5: 'HO', 6: 'N', 7: 'E', 8: 'ST',
  9: 'S', 10: 'IN', 11: 'CE', 12: 'RE',
  13: 'TR', 14: 'UT', 15: 'HF', 16: 'UL'
};
export const SCRAMBLE = [
  [2, 3, 6, 9],
  [11, 14, 16, 12],
  [8, 10, 5, 4],
  [7, 13, 1, 15],
];

export const THEME = "Genuine";
