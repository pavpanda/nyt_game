interface GameHeaderProps {
  theme: string;
  onShowInstructions: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ theme, onShowInstructions }) => (
  <div className="text-center space-y-1">
    <h1 className="text-7xl md:text-8xl font-bold text-gray-800 transition-all">Flip</h1>
    <h2 className="text-xl md:text-2xl text-gray-600 transition-all">Theme: {theme}</h2>
    
    <div className="m-4">
      <p className="text-sm md:text-base text-gray-700"><span className="text-blue-400 font-bold">Flip</span> or <span className="text-blue-400 font-bold">swap</span> rows or columns.</p>
      <p className="text-sm md:text-base text-gray-700">Each <span className="text-blue-400 font-bold">row</span> is a word related to the theme.</p>
      <p className="text-sm md:text-base text-gray-700">The solved board is in <span className="text-blue-400 font-bold">alphabetical order</span>.</p>
      <p className="text-sm font-bold md:text-base text-blue-600">To solve a word, it must placed in the correct row.</p>
    </div>
    <button
      onClick={onShowInstructions}
      className="text-lg md:text-lg text-blue-500 hover:text-blue-600 transition-colors underline"
    >
      How to Play
    </button>
  </div>
);