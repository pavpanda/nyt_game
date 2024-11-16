// src/components/HowToPlayAnimationModal/AnimationGrid.tsx

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimationGrid.module.css';

interface AnimationGridProps {
  grid: number[][];
  highlight: { type: 'row' | 'col'; index: number } | null;
  frozenRows: Set<number>;
}

const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
};

const AnimationGrid: React.FC<AnimationGridProps> = ({ grid, highlight, frozenRows }) => {
  return (
    <motion.div className={styles.grid} layout>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isHighlighted =
            highlight &&
            ((highlight.type === 'row' && highlight.index === rowIndex) ||
              (highlight.type === 'col' && highlight.index === colIndex));

          return (
            <motion.div
              key={`anim-cell-${rowIndex}-${colIndex}`}
              className={`${styles.gridCell} ${isHighlighted ? styles.highlight : ''} ${
                frozenRows.has(rowIndex) ? styles.frozen : ''
              }`}
              layout
              transition={{ duration: 0.5 }}
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
