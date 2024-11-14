export type DragType = 'row' | 'col' | null;
export type Grid = number[][];

export interface TouchDragState {
  active: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  elementIndex: number;
  dragType: DragType;
  initialRect: DOMRect | null;
}

export interface CellProps {
  num: number;
  isFrozen: boolean;
  isHighlighted: boolean;
  isDragTarget: boolean;
}

export interface DragHandleProps {
  index: number;
  type: 'row' | 'col';
  isActive: boolean;
  isFrozen?: boolean;
  onTouchStart: (e: React.TouchEvent, index: number, type: 'row' | 'col') => void;
  onFlip: (index: number, type: 'row' | 'col') => void;
  onMouseDown: (e: React.MouseEvent, index: number, type: 'row' | 'col') => void;
}