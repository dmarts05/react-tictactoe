const getRandomMoveIndex = extendedInfoBoard => {
  console.log(extendedInfoBoard);
  const availableCells = extendedInfoBoard.filter(cell => cell.content === ' ');

  console.log(availableCells);

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
    default:
      break;
  }
};

export default getAiMoveIndex;
