import React from 'react';
import styles from './NavigationDots.module.css';

interface NavigationDotsProps {
  total: number;
  current: number;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ total, current }) => {
  return (
    <div className={styles.navigationDots}>
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={`dot-${index}`}
          className={`${styles.dot} ${current === index ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
