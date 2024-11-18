import { NUM_ROWS } from "../constants/gameConstants";
import BestScore from "./BestScore";

interface GameStatsProps {
    moveCount: number;
    completedRows: number;
  }
  
  export const GameStats: React.FC<GameStatsProps> = ({ 
    moveCount, 
    completedRows, 
  }) => {
    let isGameComplete:boolean = false;
    if (completedRows >= NUM_ROWS) {
      isGameComplete = true;
    }
    return (
      <div className="flex items-center gap-4">
        <BestScore currentMoves={moveCount} isGameComplete={isGameComplete} />
      </div>
    );
  };