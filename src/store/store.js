import { create } from 'zustand';

const INITIAL_BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const INITIAL_STATE = {
  board: INITIAL_BOARD,
  currentTurn: 'O',
  gamePreferences: {
    difficulty: '',
    gameMode: '',
    playerOneName: '',
    playerTwoName: '',
  },
  isGameInProgress: false,
  isEndGame: {
    hasPlayerOneWon: false,
    hasPlayerTwoWon: false,
    isTie: false,
    winningCombo: [],
  },
  resetGameCounter: 0,
};

const gameStore = set => ({
  ...INITIAL_STATE,
  setBoard: newBoard => {
    set(state => ({
      ...state,
      board: [...newBoard],
    }));
  },
  setGamePreferences: preferences => {
    set(state => ({ ...state, gamePreferences: preferences }));
  },
  setIsGameInProgress: isInProgress => {
    set(state => ({ ...state, isGameInProgress: isInProgress }));
  },
  setCurrentTurn: turn => {
    set(state => ({ ...state, currentTurn: turn }));
  },
  setIsEndGame: isEnd => {
    set(state => ({ ...state, isEndGame: isEnd }));
  },
  resetGame: () => {
    const { board, currentTurn, isEndGame } = INITIAL_STATE;
    set(state => {
      return {
        ...state,
        board,
        currentTurn,
        isEndGame,
        resetGameCounter: state.resetGameCounter + 1,
      };
    });
  },
  resetFull: () => {
    set(state => ({ ...state, ...INITIAL_STATE }));
  },
});

const useGameStore = create(gameStore);

export default useGameStore;
