import React from 'react';
import styles from './Screens.module.css';

interface Screen0Props {
  setHandColor?: (color: string) => void;
  setHandPosition?: (position: { top: number; left: number }) => void;
  setHighlight?: (highlight: { type: 'row' | 'col'; index: number } | null) => void;
}

const Screen0: React.FC<Screen0Props> = () => {
  return (
    <div className={styles.screenContainer}>
      <ul className={styles.bulletPoints}>
        <li>You are given a 4x4 grid of letters.</li>
        <li>You win by arranging four rows of themed words <strong>alphabetically</strong>.</li>
        <li>Each word is four letters long.</li>
        <li>You have access to two operations: <strong>swaps</strong> and <strong>flips</strong>.</li>
        <ul className={styles.bulletPoints}>
          <li>You can swap rows or columns  by dragging.</li>
          <li>You can flip rows or columns by clicking the buttons outside of the grid.</li>
        </ul>
        <li>Once you place one of the four words in the correct row, it will change colors and freeze.</li>
      </ul>
    </div>
  );
};

export default Screen0;
