import { motion } from 'framer-motion';
import { useEffect } from 'react';
import useGameStore from './store/store';
import { setDefaultOsTheme } from './helpers/theme-helpers';
import StartPage from './components/StartPage/StartPage';
import GamePage from './components/GamePage/GamePage';
import ThemeToggle from './components/UI/ThemeToggle';

export default function App() {
  const isGameInProgress = useGameStore(state => state.isGameInProgress);

  useEffect(() => {
    setDefaultOsTheme();
  }, [setDefaultOsTheme]);

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
      <ThemeToggle className='fixed right-0 bottom-0 mb-3 mr-3' />
    </motion.div>
  );
}
