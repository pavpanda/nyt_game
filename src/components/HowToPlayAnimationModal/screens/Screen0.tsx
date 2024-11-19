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
        <li>You win by arranging four rows of themed words alphabetically.</li>
        <li>Each word is four letters long.</li>
      </ul>
    </div>
  );
};

export default Screen0;
