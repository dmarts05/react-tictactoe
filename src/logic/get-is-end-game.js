const getIsEndGame = board => {
  // Game has not finished yet base case
  const isEndGame = {
    hasPlayerOneWon: false,
    hasPlayerTwoWon: false,
    isTie: false,
    winningCombo: [],
  };

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check if a player has won
  winningCombos.forEach(combo => {
    const [firstIndex, secondIndex, thirdIndex] = combo;

    if (
      board[firstIndex] !== ' ' &&
      board[firstIndex] === board[secondIndex] &&
      board[firstIndex] === board[thirdIndex]
    ) {
      // Win
      isEndGame.winningCombo = combo;
      isEndGame[
        board[0] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'
      ] = true;
    }
  });

  // Check if it is a tie
  isEndGame.isTie =
    !isEndGame.hasPlayerOneWon &&
    !isEndGame.hasPlayerTwoWon &&
    !board.some(cell => cell === ' ');

  return isEndGame;
};

export default getIsEndGame;
