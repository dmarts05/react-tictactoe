import GameStatus from './GameStatus';
import Board from './Board';
import GameControls from './GameControls';

export default function GamePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <GameStatus />
      <Board />
      <GameControls />
    </div>
  );
}
