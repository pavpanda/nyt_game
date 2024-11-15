// src/components/HowToPlayAnimationModal/HandIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaHandPaper } from 'react-icons/fa';
import styles from './HandIcon.module.css';

interface HandIconProps {
  position: { top: number; left: number };
  color: string;
}

const HandIcon: React.FC<HandIconProps> = ({ position, color }) => {
  return (
    <motion.div
      className={styles.handIcon}
      animate={{ top: position.top, left: position.left, color: color }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <FaHandPaper size={24} color={color} />
    </motion.div>
  );
};

export default HandIcon;
