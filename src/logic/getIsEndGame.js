const getIsEndGame = board => {
  // Game has not finished yet base case
  const isEndGame = {
    hasPlayerOneWon: false,
    hasPlayerTwoWon: false,
    isTie: false,
  };

  // Win cases
  if (board[0] !== ' ' && board[0] === board[1] && board[0] === board[2]) {
    isEndGame[board[0] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[3] !== ' ' &&
    board[3] === board[4] &&
    board[3] === board[5]
  ) {
    isEndGame[board[3] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[6] !== ' ' &&
    board[6] === board[7] &&
    board[6] === board[8]
  ) {
    isEndGame[board[6] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[0] !== ' ' &&
    board[0] === board[3] &&
    board[0] === board[6]
  ) {
    isEndGame[board[0] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[1] !== ' ' &&
    board[1] === board[4] &&
    board[1] === board[7]
  ) {
    isEndGame[board[1] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[2] !== ' ' &&
    board[2] === board[5] &&
    board[2] === board[8]
  ) {
    isEndGame[board[2] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[0] !== ' ' &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    isEndGame[board[0] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (
    board[2] !== ' ' &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    isEndGame[board[2] === 'O' ? 'hasPlayerOneWon' : 'hasPlayerTwoWon'] = true;
  } else if (!board.some(cell => cell === ' ')) {
    // Tie
    isEndGame.isTie = true;
  }

  return isEndGame;
};

export default getIsEndGame;
