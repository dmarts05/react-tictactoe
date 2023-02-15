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
  // Temp function for testing
  updateBoard: newBoard => {
    set(state => ({
      ...state,
      board: [...newBoard],
    }));
  },
  // Create game functions here
});

const useGameStore = create(gameStore);

export default useGameStore;
