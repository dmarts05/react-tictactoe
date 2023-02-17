import { motion } from 'framer-motion';
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
  const board = useGameStore(state => state.board);
  // const setBoard = useGameStore(state => state.setBoard);

  return (
    <motion.div
      key={resetGameCounter}
      variants={container}
      initial='hidden'
      animate='visible'
      className='grid grid-cols-3 gap-3'
    >
      {board.map((cell, index) => (
        <Cell key={index} index={index} content={cell} variants={item} />
      ))}
    </motion.div>
  );
}
