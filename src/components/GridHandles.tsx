import React, { useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { DragType } from '../types/number-grid.types';
import { moveRow, moveColumn, DEFAULT_GRID } from '../utils/grid-utils';

interface HandleProps {
  index: number;
  type: DragType;
  dragType: DragType;
  dropIndex: number | null;
  onDragStart: (e: React.DragEvent, index: number, type: DragType) => void;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
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
        className={`w-12 h-12 flex items-center justify-center cursor-move
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

export const ColumnHandles: React.FC<{
  columnCount: number;
  dragType: DragType;
  dropIndex: number | null;
  onDragStart: HandleProps['onDragStart'];
  onDragEnd: HandleProps['onDragEnd'];
  onDragOver: HandleProps['onDragOver'];
  onDrop: HandleProps['onDrop'];
  onFlip: HandleProps['onFlip'];
}> = ({ columnCount, ...props }) => (
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

export const RowHandles: React.FC<{
  rowCount: number;
  dragType: DragType;
  dropIndex: number | null;
  onDragStart: HandleProps['onDragStart'];
  onDragEnd: HandleProps['onDragEnd'];
  onDragOver: HandleProps['onDragOver'];
  onDrop: HandleProps['onDrop'];
  onFlip: HandleProps['onFlip'];
}> = ({ rowCount, ...props }) => (
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