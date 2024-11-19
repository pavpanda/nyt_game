import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimationGrid.module.css';

interface AnimationGridProps {
  grid: number[][];
  highlight: { type: 'row' | 'col'; index: number } | null;
  frozenRows: number[];
}

const NUMBER_TO_LETTER: { [key: number]: string } = {
  1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H',
  9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P',
};

const AnimationGrid: React.FC<AnimationGridProps> = ({ grid, highlight, frozenRows }) => {
  const getIsFrozen = (rowIndex: number): boolean => {
    return frozenRows.includes(rowIndex);
  };

  return (
    <motion.div className={styles.grid} layout>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isHighlighted =
            highlight &&
            ((highlight.type === 'row' && highlight.index === rowIndex) ||
              (highlight.type === 'col' && highlight.index === colIndex));

          const isFrozen = getIsFrozen(rowIndex);
          const frozenClass = isFrozen ? styles[`frozen-row-${rowIndex}`] : '';

          return (
            <motion.div
              key={`anim-cell-${rowIndex}-${colIndex}`}
              className={`${styles.gridCell} ${isHighlighted ? styles.highlight : ''} ${frozenClass}`}
              layout
              animate={{
                backgroundColor: isFrozen 
                  ? '#f3f3f3' 
                  : isHighlighted 
                    ? '#e3f2fd' 
                    : '#ffffff'
              }}
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