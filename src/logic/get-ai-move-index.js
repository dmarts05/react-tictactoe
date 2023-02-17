const getBestMoveIndex = extendedInfoBoard => {
  // const bestValue = Number.MIN_SAFE_INTEGER;
  const bestMoveIndex = -1;

  const availableCells = extendedInfoBoard.filter(cell => cell.content === ' ');

  availableCells.forEach(cell => {
    // Temporary place AI piece in the board
    extendedInfoBoard[cell.index] = { ...cell, content: 'X' };

    // Keep going...
  });

  return bestMoveIndex;
};

const getRandomMoveIndex = extendedInfoBoard => {
  const availableCells = extendedInfoBoard.filter(cell => cell.content === ' ');

  return availableCells[Math.floor(Math.random() * availableCells.length)]
    .index;
};

const getAiMoveIndex = (board, difficulty) => {
  const extendedInfoBoard = board.map((cell, index) => ({
    content: cell,
    index,
  }));

  switch (difficulty) {
    case 'easy':
      return getRandomMoveIndex(extendedInfoBoard);
    case 'normal':
      return getBestMoveIndex(extendedInfoBoard);
    default:
      return getRandomMoveIndex(extendedInfoBoard);
  }
};

export default getAiMoveIndex;
