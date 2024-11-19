import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimationGrid.module.css';

interface AnimationGridProps {
  grid: number[][];
  highlight: { type: 'row' | 'col'; index: number } | null;
  frozenRows: number[];
}

const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'B',
  2: 'E',
  3: 'A',
  4: 'R',
  5: 'F',
  6: 'I',
  7: 'S',
  8: 'H',
  9: 'N',
  10: 'E',
  11: 'W',
  12: 'T',
  13: 'W',
  14: 'O',
  15: 'L',
  16: 'F',
};

const AnimationGrid: React.FC<AnimationGridProps> = ({ grid, highlight, frozenRows }) => {
  const isRowFrozen = (rowIndex: number): boolean => frozenRows.includes(rowIndex);

  return (
    <motion.div className={styles.grid} layout>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isHighlighted =
            highlight &&
            ((highlight.type === 'row' && highlight.index === rowIndex) ||
              (highlight.type === 'col' && highlight.index === colIndex));

          const frozenClass = isRowFrozen(rowIndex) ? styles[`frozen-row-${rowIndex}`] : '';

          return (
            <motion.div
              key={`anim-cell-${rowIndex}-${colIndex}`}
              className={`${styles.gridCell} ${isHighlighted ? styles.highlight : ''} ${frozenClass}`}
              layout
              // Removed the backgroundColor animation to rely on CSS classes
              transition={{ duration: 0.3 }}
            >
              {NUMBER_TO_LETTER[cell]}
            </motion.div>
          );
        })
      )}
    </motion.div>
  );
};

export default AnimationGrid;
