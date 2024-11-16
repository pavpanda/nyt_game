import React from 'react';
import NextFlipTimer from './NextFlipTimer';
import { GAME_NUMBER, LINK, THEME } from '../constants/gameConstants';
import { Share } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAnalytics } from '../hooks/useAnalytics';

interface WinModalProps {
  onClose: () => void;
  solvedRowsHistory: Record<number, number>;
}

const WinModal: React.FC<WinModalProps> = ({ onClose, solvedRowsHistory }) => {
  const { trackEvent } = useAnalytics();
  
  const emojiMapping: Record<number, string> = {
    0: '🟨🟨🟨🟨',
    1: '🟧🟧🟧🟧',
    2: '🟩🟩🟩🟩',
    3: '🟪🟪🟪🟪',
  };

  const visualizationRows = Object.entries(solvedRowsHistory).map(([state, count]) => ({
    emoji: emojiMapping[parseInt(state, 10)] || '⬜',
    count,
  }));

  const visualizationString = visualizationRows
    .map(row => `${row.emoji} ${row.count}`)
    .join('\n');

  const totalMoves = Math.max(...Object.values(solvedRowsHistory));
  const clipboardText = `Flip #${GAME_NUMBER}\n${LINK}\nDaily @ 9 am ET!\n\nTheme: ${THEME}\nTotal Moves: ${totalMoves}\n\n${visualizationString}`;

  // Check if the Web Share API is available
  const isShareAvailable = typeof navigator !== 'undefined' && 
                          navigator.share && 
                          typeof navigator.share === 'function';

  const handleClipboardCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(clipboardText);
      
      // Add debug logs
      console.log('GA Available:', typeof window.gtag !== 'undefined');
      console.log('Tracking event: share_results');
      
      trackEvent('share_results', {
        method: 'clipboard',
        game_number: GAME_NUMBER,
        total_moves: totalMoves,
        theme: THEME
      });
      
      toast.success('Copied to clipboard!', {
          duration: 2000,
          position: 'top-center',
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      // Track failed attempts
      trackEvent('share_error', {
        method: 'clipboard',
        error: err instanceof Error ? err.message : 'Unknown error',
        game_number: GAME_NUMBER,
        theme: THEME
      });
    }
  };

  const handleShare = async (): Promise<void> => {
    // Always copy to clipboard first
    await handleClipboardCopy();
    
    // Then try to show share sheet on mobile
    if (isShareAvailable) {
      try {
        await navigator.share({
          title: 'My Flip Results',
          text: clipboardText,
        });

      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">You Win!</h2>
        
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
        
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-blue-500 hover:underline focus:outline-none"
          >
            <Share className="w-4 h-4" />
            {isShareAvailable ? 'Share results' : 'Copy results'}
          </button>
          <button
            onClick={onClose}
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