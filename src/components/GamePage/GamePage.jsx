import Board from './Board';
import CurrentTurn from './CurrentTurn';

export default function GamePage() {
  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <CurrentTurn />
      <Board />
    </div>
  );
}
