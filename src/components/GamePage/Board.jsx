import { motion } from 'framer-motion';
import { useEffect } from 'react';
import getAiMoveIndex from '../../logic/get-ai-move-index';
import getIsEndGame from '../../logic/get-is-end-game';
import useGameStore from '../../store/store';
import Cell from './Cell';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { scale: 0, rotate: 180 },
  visible: {
    scale: 1,
    rotate: 0,
  },
};

export default function Board() {
  const resetGameCounter = useGameStore(state => state.resetGameCounter);
  const currentTurn = useGameStore(state => state.currentTurn);
  const isEndGame = useGameStore(state => state.isEndGame);
  const gamePreferences = useGameStore(state => state.gamePreferences);
  const { difficulty, gameMode } = useGameStore(state => state.gamePreferences);
  const board = useGameStore(state => state.board);
  const setCurrentTurn = useGameStore(state => state.setCurrentTurn);
  const setBoard = useGameStore(state => state.setBoard);
  const setIsEndGame = useGameStore(state => state.setIsEndGame);

  const hasGameEnded = (currentIsEndGame = isEndGame) => {
    for (const key in currentIsEndGame) {
      if (key !== 'winningCombo' && currentIsEndGame[key]) {
        return true;
      }
    }

    return false;
  };

  const performPlayerMoveHandler = cellIndex => {
    const newBoard = [...board];
    newBoard[cellIndex] = currentTurn;
    setCurrentTurn(currentTurn === 'O' ? 'X' : 'O');
    setBoard(newBoard);
    setIsEndGame(getIsEndGame(newBoard));
  };

  const performAiMoveHandler = () => {
    const newBoard = [...board];
    const aiMoveIndex = getAiMoveIndex(newBoard, difficulty);
    newBoard[aiMoveIndex] = 'X';

    const currentIsEndGame = getIsEndGame(newBoard);
    setIsEndGame(currentIsEndGame);
    setBoard(newBoard);
    // Only change turn if the game hasn't finished yet
    if (!hasGameEnded(currentIsEndGame)) {
      setCurrentTurn('O');
    }
  };

  useEffect(() => {
    if (gameMode === 'ai' && currentTurn === 'X' && !hasGameEnded()) {
      performAiMoveHandler();
    }
  }, [gameMode, currentTurn, performAiMoveHandler]);

  return (
    <motion.div
      key={resetGameCounter}
      variants={container}
      initial='hidden'
      animate='visible'
      className='grid grid-cols-3 gap-3'
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          index={index}
          content={cell}
          variants={item}
          isAiTurn={gamePreferences.gameMode === 'ai' && currentTurn === 'X'}
          isCellWinningCombo={cellIndex =>
            isEndGame.winningCombo.includes(cellIndex)
          }
          isTie={isEndGame.isTie}
          onPerformPlayerMove={performPlayerMoveHandler}
          hasGameEnded={hasGameEnded}
        />
      ))}
    </motion.div>
  );
}
