import { Grid, TouchDragState } from '../types/types';


export const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'd', 2: 'o', 3: 'c', 4: 's',
  5: 'l', 6: 'e', 7: 'n', 8: 's',
  9: 'm', 10: 'a', 11: 'p', 12: 's',
  13: 'm', 14: 'e', 15: 'e', 16: 't'
};

export const SOLUTION: Grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export const SCRAMBLE = [
  [7, 4, 8, 6],
  [9, 12, 15, 13],
  [10, 14, 16, 11],
  [2, 1, 5, 3],
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