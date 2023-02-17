import { motion } from 'framer-motion';
import useGameStore from '../../store/store';
import getIsEndGame from '../../logic/getIsEndGame';

// TODO implement variants so animations work properly

export default function Cell({ index, content, variants }) {
  const board = useGameStore(state => state.board);
  const currentTurn = useGameStore(state => state.currentTurn);
  const isEndGame = useGameStore(state => state.isEndGame);
  const gamePreferences = useGameStore(state => state.gamePreferences);
  const setBoard = useGameStore(state => state.setBoard);
  const setCurrentTurn = useGameStore(state => state.setCurrentTurn);
  const setIsEndGame = useGameStore(state => state.setIsEndGame);

  const isCellUsed = content !== ' ';

  const isAiTurn = gamePreferences.gameMode === 'ai' && currentTurn === 'X';

  const hasGameEnded = () => {
    for (const key in isEndGame) {
      if (isEndGame[key]) {
        return true;
      }
    }

    return false;
  };

  const performMoveHandler = () => {
    if (isCellUsed) {
      return;
    } else if (isAiTurn) {
      return;
    } else if (hasGameEnded()) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setCurrentTurn(currentTurn === 'O' ? 'X' : 'O');
    setBoard(newBoard);
    setIsEndGame(getIsEndGame(newBoard));
  };

  return (
    <motion.div variants={variants}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={performMoveHandler}
        className={`grid h-24 w-24 cursor-pointer select-none place-content-center rounded-2xl border-4 border-zinc-800 dark:border-white ${
          (hasGameEnded() || isAiTurn) && 'cursor-not-allowed'
        }`}
      >
        <motion.p
          key={content}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className='text-5xl font-medium text-zinc-800 dark:text-white'
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
