import { motion } from 'framer-motion';
import useGameStore from './store/store';
import StartPage from './components/StartPage/StartPage';
import GamePage from './components/GamePage/GamePage';

export default function App() {
  const isGameInProgress = useGameStore(state => state.isGameInProgress);

  return (
    <motion.div
      key={isGameInProgress}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='grid h-screen place-content-center'
    >
      {!isGameInProgress && <StartPage />}
      {isGameInProgress && <GamePage />}
    </motion.div>
  );
}
