import useGameStore from './store/store';
import StartPage from './components/StartPage/StartPage';
import GamePage from './components/GamePage/GamePage';

export default function App() {
  const isGameInProgress = useGameStore(state => state.isGameInProgress);

  return (
    <div className='grid place-content-center'>
      {!isGameInProgress && <StartPage />}
      {isGameInProgress && <GamePage />}
    </div>
  );
}
