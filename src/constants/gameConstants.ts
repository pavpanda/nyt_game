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


export const GAME_NUMBER = 48;
export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: '1', 2: '2', 3: '3', 4: '4',
  5: '5', 6: '6', 7: '7', 8: '8',
  9: '9', 10: '10', 11: '11', 12: '12',
  13: '13', 14: '14', 15: '15', 16: '16'
};
export const SCRAMBLE = [
  [4, 14, 1, 16],
  [3, 13, 8, 7],
  [10, 11, 2, 6],
  [12, 9, 5, 15],
];

export const THEME = "Increasing Order";
