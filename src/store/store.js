import { create } from 'zustand';

const INITIAL_BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const gameStore = set => ({
  board: INITIAL_BOARD,
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
  },
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
  // Create game functions here
});

const useGameStore = create(gameStore);

export default useGameStore;
