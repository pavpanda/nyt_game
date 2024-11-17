interface GameStatsProps {
    moveCount: number;
    completedRows: number;
  }
  
  export const GameStats: React.FC<GameStatsProps> = ({ moveCount, completedRows }) => (
    <div className="text-sm md:text-base text-gray-500 ">
      Moves: {moveCount}
    </div>
  );