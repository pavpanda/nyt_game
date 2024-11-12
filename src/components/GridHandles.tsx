import React from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { DragType } from '../types/number-grid.types';

interface HandleProps {
  index: number;
  type: DragType;
  dragType: DragType;
  dropIndex: number | null;
  onDragStart: (e: React.DragEvent, index: number, type: DragType) => void;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
  onTouchStart: (e: React.TouchEvent, index: number, type: DragType) => void;
  onTouchMove: (e: React.TouchEvent, index: number) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  onFlip: (index: number, type: DragType) => void;
}

const GridHandle: React.FC<HandleProps> = ({
  index,
  type,
  dragType,
  dropIndex,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onFlip,
}) => {
  const isColumn = type === 'col';
  
  return (
    <div className={`flex ${isColumn ? 'flex-col' : ''}`}>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, index, type)}
        onDragEnd={onDragEnd}
        onDragOver={(e) => dragType === type && onDragOver(e, index)}
        onDrop={(e) => onDrop(e, index)}
        onTouchStart={(e) => onTouchStart(e, index, type)}
        onTouchMove={(e) => dragType === type && onTouchMove(e, index)}
        onTouchEnd={onTouchEnd}
        className={`w-12 h-12 flex items-center justify-center cursor-move touch-none
          ${dragType === type && dropIndex === index ? 'bg-blue-100' : 'hover:bg-gray-50'}`}
      >
        <div className={`${isColumn ? 'w-1 h-4' : 'h-1 w-4'} rounded-full bg-gray-300`} />
      </div>
      <button
        onClick={() => onFlip(index, type)}
        className={`flex items-center justify-center hover:bg-gray-50
          ${isColumn ? 'w-12 h-8' : 'w-8 h-12'}`}
      >
        <ArrowLeftRight 
          className={`w-4 h-4 text-gray-400 ${isColumn ? 'rotate-90' : ''}`}
        />
      </button>
    </div>
  );
};

interface ColumnHandlesProps {
  columnCount: number;
  dragType: DragType;
  dropIndex: number | null;
  onDragStart: HandleProps['onDragStart'];
  onDragEnd: HandleProps['onDragEnd'];
  onDragOver: HandleProps['onDragOver'];
  onDrop: HandleProps['onDrop'];
  onTouchStart: HandleProps['onTouchStart'];
  onTouchMove: HandleProps['onTouchMove'];
  onTouchEnd: HandleProps['onTouchEnd'];
  onFlip: HandleProps['onFlip'];
}

export const ColumnHandles: React.FC<ColumnHandlesProps> = ({ 
  columnCount, 
  ...props 
}) => (
  <div className="flex ml-20"> {/* Aligned with grid content */}
    {Array.from({ length: columnCount }).map((_, index) => (
      <div key={`col-${index}`} className="flex flex-col">
        <GridHandle
          index={index}
          type="col"
          {...props}
        />
      </div>
    ))}
  </div>
);

interface RowHandlesProps {
  rowCount: number;
  dragType: DragType;
  dropIndex: number | null;
  onDragStart: HandleProps['onDragStart'];
  onDragEnd: HandleProps['onDragEnd'];
  onDragOver: HandleProps['onDragOver'];
  onDrop: HandleProps['onDrop'];
  onTouchStart: HandleProps['onTouchStart'];
  onTouchMove: HandleProps['onTouchMove'];
  onTouchEnd: HandleProps['onTouchEnd'];
  onFlip: HandleProps['onFlip'];
}

export const RowHandles: React.FC<RowHandlesProps> = ({ 
  rowCount, 
  ...props 
}) => (
  <div className="flex flex-col">
    {Array.from({ length: rowCount }).map((_, index) => (
      <GridHandle
        key={`row-handle-${index}`}
        index={index}
        type="row"
        {...props}
      />
    ))}
  </div>
);

export type { HandleProps, ColumnHandlesProps, RowHandlesProps };