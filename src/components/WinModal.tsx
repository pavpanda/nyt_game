// WinModal.tsx
import React, { useState, useEffect } from 'react';
import NextFlipTimer from './NextFlipTimer';
import { GAME_NUMBER, LINK, THEME } from '../constants/gameConstants';
import { Share } from 'lucide-react';
import toast from 'react-hot-toast';

const NICKNAME_STORAGE_KEY = 'playerNickname';
const PENDING_SCORE_KEY = 'pendingScore';
const ACTIVE_BRANCH_KEY = 'activeBranch';

interface WinModalProps {
  onClose: () => void;
  solvedRowsHistory: Record<number, number>;
  currentBranch?: string;
  onSubmitScoreToBranch: (
    branch: string,
    nickname: string,
    moves: number
  ) => Promise<void>;
}

const WinModal: React.FC<WinModalProps> = ({
  onClose,
  solvedRowsHistory,
  currentBranch,
  onSubmitScoreToBranch
}) => {
  const [nickname, setNickname] = useState('');
  const [createNewBranch, setCreateNewBranch] = useState(false);
  const [newBranchId, setNewBranchId] = useState('');

  // Pre-fill nickname from localStorage
  useEffect(() => {
    const savedNickname = localStorage.getItem(NICKNAME_STORAGE_KEY);
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  // Update localStorage as user types
  useEffect(() => {
    localStorage.setItem(NICKNAME_STORAGE_KEY, nickname);
  }, [nickname]);

  const totalMoves = Math.max(...Object.values(solvedRowsHistory));

  // Simple row visualization
  const emojiMapping: Record<number, string> = {
    0: '🟨🟨🟨🟨',
    1: '🟧🟧🟧🟧',
    2: '🟩🟩🟩🟩',
    3: '🟪🟪🟪🟪',
  };
  const visualizationRows = Object.entries(solvedRowsHistory).map(([rowIndex, moveAtSolve]) => ({
    emoji: emojiMapping[parseInt(rowIndex, 10)] || '⬜',
    count: moveAtSolve,
  }));
  const visualizationString = visualizationRows
    .map(row => `${row.emoji} ${row.count}`)
    .join('\n');

  // Decide which branch link to share (if any)
  const getShareText = (branchLink: string | null) => {
    const linkLine = branchLink ? `\n${branchLink}\n` : '';
    return `Flip #${GAME_NUMBER}${linkLine}\nDaily @ 9 am ET!\nTheme: ${THEME}\nTotal Moves: ${totalMoves}\n\n${visualizationString}`;
  };

  // Check if Web Share API is available
  const isShareAvailable =
    typeof navigator !== 'undefined' &&
    navigator.share &&
    typeof navigator.share === 'function';

  const handleShare = async () => {
    let finalBranchLink: string | null = null;

    // If user wants a new branch
    if (createNewBranch) {
      let finalNewBranchId = newBranchId.trim();
      if (!finalNewBranchId) {
        finalNewBranchId = Math.random().toString(36).slice(2, 10);
      }
      if (nickname && totalMoves !== 999) {
        // Submit to Firestore
        await onSubmitScoreToBranch(finalNewBranchId, nickname, totalMoves);

        // Overwrite local storage with new branch
        localStorage.setItem(ACTIVE_BRANCH_KEY, finalNewBranchId);

        finalBranchLink = LINK + `/#/${finalNewBranchId}`;
      }
    }
    // Otherwise, if we have a current branch
    else if (currentBranch) {
      finalBranchLink = LINK + `/#/${currentBranch}`;
    } else {
      finalBranchLink = LINK;
    }

    // Now build text with or without link
    const shareText = getShareText(finalBranchLink);

    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(shareText);
      toast.success('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.error('Failed to copy to clipboard');
    }

    // If available, open native share sheet
    if (isShareAvailable) {
      try {
        await navigator.share({
          title: 'My Flip Results',
          text: shareText,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const handleClose = async () => {
    // Always store final moves
    localStorage.setItem(PENDING_SCORE_KEY, `${totalMoves}`);

    // If we're not creating new branch, let's store to existing branch
    if (!createNewBranch && currentBranch && nickname && totalMoves !== 999) {
      await onSubmitScoreToBranch(currentBranch, nickname, totalMoves);

      // Overwrite local storage with existing branch
      localStorage.setItem(ACTIVE_BRANCH_KEY, currentBranch);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">You Win!</h2>

        {/* Visualization */}
        <div className="mb-4 grid grid-cols-[auto,1fr] gap-x-1 justify-items-start w-fit mx-auto">
          {visualizationRows.map((row, index) => (
            <React.Fragment key={index}>
              <div className="whitespace-pre">{row.emoji}</div>
              <div className="text-left">{row.count}</div>
            </React.Fragment>
          ))}
        </div>

        <p className="text-center mb-4">
          Total Moves: <span className="font-semibold">{totalMoves}</span>
        </p>

        <NextFlipTimer />

        {/* Nickname */}
        <div className="flex flex-col mb-4">
          <label htmlFor="nickname" className="mb-1 font-semibold">
            Nickname
          </label>
          <input
            id="nickname"
            className="border rounded px-2 py-1"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
          />
        </div>

        {/* Create or join a new branch */}
        <div className="flex items-center mb-4">
          <input
            id="createBranch"
            type="checkbox"
            checked={createNewBranch}
            onChange={() => setCreateNewBranch(!createNewBranch)}
            className="mr-2"
          />
          <label htmlFor="createBranch" className="font-semibold">
            Create New Group
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-blue-500 hover:underline focus:outline-none"
          >
            <Share className="w-4 h-4" />
            {isShareAvailable ? 'Share results' : 'Copy results'}
          </button>

          <button
            onClick={handleClose}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
