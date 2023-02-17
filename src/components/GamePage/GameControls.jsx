import { motion } from 'framer-motion';
import useGameStore from '../../store/store';
import Button from '../UI/Button';

export default function GameControls() {
  const resetGame = useGameStore(state => state.resetGame);
  const resetFull = useGameStore(state => state.resetFull);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5 }}
      className='flex items-center justify-center gap-6'
    >
      <Button
        styleType='secondary'
        className='w-32 sm:text-xl'
        onClick={resetGame}
      >
        Reset
      </Button>
      <Button
        styleType='primary'
        className='w-32 sm:text-xl'
        onClick={resetFull}
      >
        Home
      </Button>
    </motion.div>
  );
}
