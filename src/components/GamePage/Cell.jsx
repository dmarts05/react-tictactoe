import useGameStore from '../../store/store';
import getIsEndGame from '../../logic/getIsEndGame';

export default function Cell({ index, content }) {
  const board = useGameStore(state => state.board);
  const currentTurn = useGameStore(state => state.currentTurn);
  const isEndGame = useGameStore(state => state.isEndGame);
  // const gamePreferences = useGameStore(state => state.gamePreferences);
  const setBoard = useGameStore(state => state.setBoard);
  const setCurrentTurn = useGameStore(state => state.setCurrentTurn);
  const setIsEndGame = useGameStore(state => state.setIsEndGame);

  const performMoveHandler = () => {
    // Check if cell has already been used
    if (content !== ' ') {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setCurrentTurn(currentTurn === 'O' ? 'X' : 'O');
    setBoard(newBoard);
    setIsEndGame(getIsEndGame(newBoard));
  };

  return (
    <div
      onClick={() => {
        for (const key in isEndGame) {
          if (isEndGame[key]) {
            return;
          }
        }
        performMoveHandler();
      }}
      className='grid h-24 w-24 cursor-pointer select-none place-content-center rounded-2xl border-4 border-white text-5xl font-medium'
    >
      {content}
    </div>
  );
}
