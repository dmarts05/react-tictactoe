import { motion } from 'framer-motion';
import useGameStore from '../../store/store';
import getIsEndGame from '../../logic/getIsEndGame';

// TODO implement variants so animations work properly

export default function Cell({ index, content }) {
  const board = useGameStore(state => state.board);
  const currentTurn = useGameStore(state => state.currentTurn);
  const isEndGame = useGameStore(state => state.isEndGame);
  const gamePreferences = useGameStore(state => state.gamePreferences);
  const setBoard = useGameStore(state => state.setBoard);
  const setCurrentTurn = useGameStore(state => state.setCurrentTurn);
  const setIsEndGame = useGameStore(state => state.setIsEndGame);

  const performMoveHandler = () => {
    // Check if cell has already been used
    if (content !== ' ') {
      return;
    }
    // Check if it is AI's turn
    else if (gamePreferences.gameMode === 'ai' && currentTurn === 'X') {
      return;
    }
    // Check if the game has ended
    else {
      for (const key in isEndGame) {
        if (isEndGame[key]) {
          return;
        }
      }
    }

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setCurrentTurn(currentTurn === 'O' ? 'X' : 'O');
    setBoard(newBoard);
    setIsEndGame(getIsEndGame(newBoard));
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 0.9 }}
      onClick={performMoveHandler}
      className='grid h-24 w-24 cursor-pointer select-none place-content-center rounded-2xl border-4 border-zinc-800 text-5xl font-medium dark:border-white'
    >
      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
        {content}
      </motion.span>
    </motion.div>
  );
}
