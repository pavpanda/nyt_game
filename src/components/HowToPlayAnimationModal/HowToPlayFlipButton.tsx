// src/components/HowToPlayAnimationModal/FlipButton.tsx
import React from 'react';
import { FaArrowsAltH, FaArrowsAltV } from 'react-icons/fa';
import styles from './HowToPlayFlipButton.module.css';

interface HowToPlayFlipButtonProps {
  direction: 'row' | 'col';
  index: number;
  onClick: () => void;
}

const HowToPlayFlipButton: React.FC<HowToPlayFlipButtonProps> = ({ direction, index, onClick }) => {
  const Icon = direction === 'row' ? FaArrowsAltH : FaArrowsAltV;
  const label = direction === 'row' ? `Flip Row ${index + 1}` : `Flip Column ${index + 1}`;
  const positionClass = direction === 'row' ? styles[`row-${index}`] : styles[`col-${index}`];

  return (
    <button
      onClick={onClick}
      className={`${styles.flipButton} ${positionClass}`}
      aria-label={label}
      disabled
    >
      <Icon size={16} />
      <span className={styles.tooltip}>{label}</span>
    </button>
  );
};

export default HowToPlayFlipButton;
