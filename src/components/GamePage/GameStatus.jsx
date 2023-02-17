import { motion } from 'framer-motion';
import useGameStore from '../../store/store';

export default function GameStatus() {
  const currentTurn = useGameStore(state => state.currentTurn);

  const isEndGame = useGameStore(state => state.isEndGame);
  const { playerOneName, playerTwoName } = useGameStore(
    state => state.gamePreferences
  );

  let content;

  if (isEndGame.hasPlayerOneWon) {
    content = (
      <span>
        <span className='text-yellow-400'>{playerOneName}</span> has won!
      </span>
    );
    // content = `${playerOneName} has won!`;
  } else if (isEndGame.hasPlayerTwoWon) {
    content = (
      <span>
        <span className='text-yellow-400'>{playerTwoName}</span> has won!
      </span>
    );
  } else if (isEndGame.isTie) {
    content = (
      <span>
        {"It's a "}
        <span className='text-blue-400'>tie</span>!
      </span>
    );
  } else {
    content = `${currentTurn === 'O' ? playerOneName : playerTwoName}'s turn!`;
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2 }}
    >
      <motion.p
        key={content}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className='text-3xl font-medium'
      >
        {content}
      </motion.p>
    </motion.div>
  );
}
