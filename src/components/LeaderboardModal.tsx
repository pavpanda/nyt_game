// LeaderboardModal.tsx
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { X, Award } from 'lucide-react';

interface LeaderboardModalProps {
  branchId: string;
  onClose: () => void;
}

interface ScoreEntry {
  nickname: string;
  moves: number;
  date: string;
}

const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ branchId, onClose }) => {
  const db = getFirestore();
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const docRef = doc(db, 'scores', branchId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          let branchScores = (data.scores || []) as ScoreEntry[];

          // Sort ascending by moves
          branchScores.sort((a, b) => a.moves - b.moves);

          // Filter to keep only the first occurrence of each nickname
          const uniqueScores: ScoreEntry[] = [];
          const seenNicknames = new Set<string>();

          for (const score of branchScores) {
            if (!seenNicknames.has(score.nickname)) {
              uniqueScores.push(score);
              seenNicknames.add(score.nickname);
            }
          }

          setScores(uniqueScores);
        } else {
          setScores([]);
        }
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
        toast.error('Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [branchId, db]);

  const renderTopThree = () => {
    const topThree = scores.slice(0, 3);
    return (
      <div className="flex justify-center space-x-4 mb-6">
        {topThree.map((score, index) => (
          <div
            key={score.nickname}
            className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-300 rounded-full mb-2">
              <Award className="w-6 h-6 text-yellow-800" />
            </div>
            <span className="text-lg font-semibold">{index + 1}</span>
            <span className="text-md">{score.nickname}</span>
            <span className="text-sm text-gray-600">Moves: {score.moves}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderScoreList = () => {
    return (
      <ul className="space-y-2">
        {scores.slice(3).map((score, index) => (
          <li
            key={score.nickname}
            className="flex justify-between items-center p-2 bg-gray-50 rounded-md shadow-sm"
          >
            <span className="text-gray-800">{index + 4}. {score.nickname}</span>
            <span className="text-blue-500 font-semibold">{score.moves} moves</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">Leaderboard</h2>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : scores.length === 0 ? (
          <div className="text-center text-gray-600">No scores yet for this branch!</div>
        ) : (
          <>
            {scores.length >=1 && renderTopThree()}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3">Other Players</h3>
              {scores.length > 3 ? renderScoreList() : (
                <div className="text-center text-gray-600">No other scores yet.</div>
              )}
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LeaderboardModal;
