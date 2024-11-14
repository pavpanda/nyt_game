import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const NextPuzzleTimer = () => {
  const [timeUntilNext, setTimeUntilNext] = useState('');

  useEffect(() => {
    const calculateTimeUntilNext = () => {
      const now = new Date();
      const next9AM = new Date();

      console.log(now.getHours());

      // Check if it's already past 9 AM today
      if (now.getHours() >= 9) {
        // If it is, set the next 9 AM to tomorrow
        next9AM.setDate(next9AM.getDate() + 1);
      }

      next9AM.setHours(9, 0, 0, 0); // Set time to 9 AM ET
      
      const diff = next9AM.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    setTimeUntilNext(calculateTimeUntilNext());
    const timer = setInterval(() => {
      setTimeUntilNext(calculateTimeUntilNext());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center gap-2 rounded-lg p-4">
      <Clock className="h-4 w-4 text-slate-600" />
      <span className="text-sm text-slate-600">Next Flip in</span>
      <span className="font-mono text-lg font-semibold text-slate-800">{timeUntilNext}</span>
    </div>
  );
};

export default NextPuzzleTimer;
