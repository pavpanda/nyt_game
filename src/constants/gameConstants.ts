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



export const GAME_NUMBER = 37;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'FE', 2: 'DE', 3: 'RE', 4: 'R',
  5: 'J', 6: 'OR', 7: 'DA', 8: 'N',
  9: 'L', 10: 'ED', 11: 'EC', 12: 'KY',
  13: 'WI', 14: 'LL', 15: 'IA', 16: 'MS'
};
export const SCRAMBLE = [
  [1, 10, 15, 12],
  [16, 2, 8, 7],
  [13, 14, 3, 6],
  [11, 9, 4, 5],
];

export const THEME = "Sports Icons";
