import useGameStore from '../../store/store';

export default function CurrentTurn() {
  const currentTurn = useGameStore(state => state.currentTurn);
  const { playerOneName, playerTwoName } = useGameStore(
    state => state.gamePreferences
  );

  const getCurrentTurnPlayer = () =>
    currentTurn === 'O' ? playerOneName : playerTwoName;

  return <p className='text-3xl font-medium'>{getCurrentTurnPlayer()} turn!</p>;
}
