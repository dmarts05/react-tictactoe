import getIsEndGame from './get-is-end-game';

let extendedInfoBoard;
const MAX_DEPTH = 6;

const getHeuristicValue = () => {
  const isEndGame = getIsEndGame(extendedInfoBoard.map(cell => cell.content));

  return isEndGame.hasPlayerOneWon ? -10 : isEndGame.hasPlayerTwoWon ? 10 : 0;
};

const minimax = (depth, isMaximizing, alfa, beta) => {
  const isEndGame = getIsEndGame(extendedInfoBoard.map(cell => cell.content));
  if (
    depth === MAX_DEPTH ||
    isEndGame.hasPlayerOneWon ||
    isEndGame.hasPlayerTwoWon ||
    isEndGame.isTie
  ) {
    return getHeuristicValue();
  }

  const availableCells = extendedInfoBoard.filter(cell => cell.content === ' ');

  let bestValue;
  if (isMaximizing) {
    // Maximize
    bestValue = Number.MIN_SAFE_INTEGER;

    const BreakError = {};

    try {
      availableCells.forEach(cell => {
        // Temporary place AI piece in the board
        extendedInfoBoard[cell.index] = { ...cell, content: 'X' };

        // Get heuristic value for this movement
        bestValue = Math.max(
          bestValue,
          minimax(depth + 1, !isMaximizing, alfa, beta)
        );

        // Update alfa value
        alfa = Math.max(alfa, bestValue);

        // Remove temporary placed AI piece from the board
        extendedInfoBoard[cell.index] = { ...cell, content: ' ' };

        if (beta <= alfa) {
          throw BreakError;
        }
      });
    } catch (error) {
      if (error !== BreakError) throw error;
    }
  } else {
    // Minimize
    bestValue = Number.MAX_SAFE_INTEGER;

    const BreakError = {};

    try {
      availableCells.forEach(cell => {
        // Temporary place adversary piece in the board
        extendedInfoBoard[cell.index] = { ...cell, content: 'O' };

        // Get heuristic value for this movement
        bestValue = Math.min(
          bestValue,
          minimax(depth + 1, !isMaximizing, alfa, beta)
        );

        // Update beta value
        beta = Math.min(beta, bestValue);

        // Remove temporary placed AI piece from the board
        extendedInfoBoard[cell.index] = { ...cell, content: ' ' };

        if (beta <= alfa) {
          throw BreakError;
        }
      });
    } catch (error) {
      if (error !== BreakError) throw error;
    }
  }

  return bestValue;
};

const getBestMoveIndex = () => {
  let bestValue = Number.MIN_SAFE_INTEGER;
  let bestMoveIndex = -1;

  const availableCells = extendedInfoBoard.filter(cell => cell.content === ' ');

  availableCells.forEach(cell => {
    // Temporary place AI piece in the board
    extendedInfoBoard[cell.index] = { ...cell, content: 'X' };

    // Get heuristic value for this movement
    const value = minimax(
      1,
      false,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );

    // Remove temporary placed AI piece from the board
    extendedInfoBoard[cell.index] = { ...cell, content: ' ' };

    // Check if we have found a better move
    if (value > bestValue) {
      bestValue = value;
      bestMoveIndex = cell.index;
    }
  });

  return bestMoveIndex;
};

const getRandomMoveIndex = () => {
  const availableCells = extendedInfoBoard.filter(cell => cell.content === ' ');

  return availableCells[Math.floor(Math.random() * availableCells.length)]
    .index;
};

const getAiMoveIndex = (board, difficulty) => {
  extendedInfoBoard = board.map((cell, index) => ({
    content: cell,
    index,
  }));

  switch (difficulty) {
    case 'easy':
      return getRandomMoveIndex();
    case 'normal': {
      const BEST_MOVE_CHANCE = 0.65;
      if (Math.random() <= BEST_MOVE_CHANCE) {
        return getBestMoveIndex();
      } else {
        return getRandomMoveIndex();
      }
    }
    case 'hard': {
      const BEST_MOVE_CHANCE = 0.85;
      if (Math.random() <= BEST_MOVE_CHANCE) {
        return getBestMoveIndex();
      } else {
        return getRandomMoveIndex();
      }
    }
    case 'impossible':
      return getBestMoveIndex();
    default:
      return getRandomMoveIndex();
  }
};

export default getAiMoveIndex;
