import useGameStore from '../../store/store';
import Cell from './Cell';

export default function Board() {
  const board = useGameStore(state => state.board);
  // const setBoard = useGameStore(state => state.setBoard);

  return (
    <div className='grid grid-cols-3 gap-3'>
      {board.map((cell, index) => (
        <Cell key={index} content={cell} />
      ))}
    </div>
  );
}
