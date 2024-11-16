import { GameBoard } from './components/GameBoard';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <GameBoard />
      <Toaster />
    </div>
    
  );
}

export default App;