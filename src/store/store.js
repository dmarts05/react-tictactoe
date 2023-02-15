import { create } from 'zustand';

const INITIAL_BOARD = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const gameStore = set => ({
  isGameInProgress: false,
  board: INITIAL_BOARD,
  isEndGame: {
    hasPlayerOneWon: false,
    hasPlayerTwoWon: false,
    isTie: false,
  },
  // Temp functions for testing
  updateBoard: newBoard => {
    set(state => ({
      ...state,
      board: [...newBoard],
    }));
  },
  toggleIsGameInProgress: () => {
    set(state => ({ ...state, isGameInProgress: !state.isGameInProgress }));
  },
  // Create game functions here
});

const useGameStore = create(gameStore);

export default useGameStore;
