import useGameStore from '../../store/store';

export default function GameStatus() {
  const currentTurn = useGameStore(state => state.currentTurn);

  const isEndGame = useGameStore(state => state.isEndGame);
  const { playerOneName, playerTwoName } = useGameStore(
    state => state.gamePreferences
  );

  let content;

  if (isEndGame.hasPlayerOneWon) {
    content = `${playerOneName} has won!`;
  } else if (isEndGame.hasPlayerTwoWon) {
    content = `${playerTwoName} has won!`;
  } else if (isEndGame.isTie) {
    content = "It's a tie!";
  } else {
    content = `${currentTurn === 'O' ? playerOneName : playerTwoName} turn!`;
  }

  return <p className='text-3xl font-medium'>{content}</p>;
}
