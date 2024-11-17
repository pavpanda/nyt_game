// src/utils/solutionChecker.ts
import { NUMBER_TO_LETTER } from '../constants/gameConstants';

export const getWordFromNumbers = (numbers: number[]): string => {
  return numbers.map(num => NUMBER_TO_LETTER[num]).join('');
};

export const checkWordPosition = (
    gridRow: number[],
    currentRowIndex: number,
    solution: number[][],
    easyMode: boolean
  ): 'correct' | 'wrong-position' | 'incorrect' => {
    // Convert solution rows to words
    const solutionWords = solution.map(row => getWordFromNumbers(row));
    
    // Convert current row to word
    const currentWord = getWordFromNumbers(gridRow);
  
    // Check if the word is in correct position
    if (currentWord === solutionWords[currentRowIndex]) {
      return 'correct';
    }
  
    // In easy mode, check if the word exists anywhere in the solution
    if (easyMode && solutionWords.includes(currentWord)) {
      return 'wrong-position';
    }
  
    return 'incorrect';
  };