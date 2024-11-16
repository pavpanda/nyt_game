import { GameBoard } from './components/GameBoard';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans" style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }}>
      <GameBoard />
      <Toaster />
    </div>
    
  );
}

export default App;