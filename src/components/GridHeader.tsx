interface GameHeaderProps {
  theme: string;
  onShowInstructions: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ theme, onShowInstructions }) => (
  <div className="text-center space-y-1">
    <h1 className="text-7xl md:text-8xl font-bold text-gray-800 transition-all">Flip</h1>
    <h2 className="text-base md:text-lg text-gray-600 transition-all">Theme: {theme}</h2>
    <button
      onClick={onShowInstructions}
      className="text-sm md:text-base text-blue-500 hover:text-blue-600 transition-colors"
    >
      How to Play
    </button>
  </div>
);