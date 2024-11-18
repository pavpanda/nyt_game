import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const BestScore: React.FC<{ currentMoves: number, isGameComplete: boolean  }> =( {currentMoves, isGameComplete}) => {
  const [bestScore, setBestScore] = useState(999);
  const db = getFirestore();

  useEffect(() => {
    const fetchBestScore = async () => {
      const scoreDoc = await getDoc(doc(db, 'scores', 'global'));
      if (scoreDoc.exists()) {
        setBestScore(scoreDoc.data().bestScore);
      }
    };

    fetchBestScore();
  }, []);

  useEffect(() => {
    const updateBestScore = async () => {
      if (!isGameComplete || !currentMoves) return;
      
      const scoreDoc = await getDoc(doc(db, 'scores', 'global'));
      const currentBest = scoreDoc.exists() ? scoreDoc.data().bestScore : Infinity;
      
      if (currentMoves < currentBest) {
        await setDoc(doc(db, 'scores', 'global'), {
          bestScore: currentMoves,
          updatedAt: new Date().toISOString()
        });
        setBestScore(currentMoves);
      }
    };

    updateBestScore();
  }, [currentMoves, isGameComplete]);

  return (
    <div className="flex flex-col gap-1 text-right">
    <span className='text-blue-400 font-bold'>Moves: {currentMoves}</span>
    {bestScore && (
        <span>
        Today's Best: {bestScore}
        </span>
    )}
    </div>
  );
};

export default BestScore;