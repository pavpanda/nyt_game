interface GameStatsProps {
    moveCount: number;
    completedRows: number;
  }
  
  export const GameStats: React.FC<GameStatsProps> = ({ moveCount, completedRows }) => (
    <div className="text-sm md:text-base text-gray-500 mt-4 md:mt-6">
      Moves: {moveCount} | Completed Rows: {completedRows}
    </div>
  );