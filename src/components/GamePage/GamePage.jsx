import Board from './Board';
import GameStatus from './GameStatus';

export default function GamePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <GameStatus />
      <Board />
    </div>
  );
}
