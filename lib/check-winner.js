import { PLAYER_INFO } from "../constants";

const checkWinner = (board) => {
  const player1Name = PLAYER_INFO.PLAYER1.NAME;
  const player2Name = PLAYER_INFO.PLAYER2.NAME;

  const topLeftToButtomRightDiagonalPlayers = [];
  const buttomLeftToTopRightDiagonalPlayers = [];
  for (let i = 1; i <= 3; i++) {
    const columnPlayers = [];
    const rowPlayers = [];
    for (let j = 1; j <= 3; j++) {
      // add row gobblers into array to check
      let gobblers = board.get(i + "" + j);
      let playerName =
        gobblers.length > 0
          ? gobblers[gobblers.length - 1].userData.player
          : null;
      rowPlayers.push(playerName);

      // add diagonal gobblers into array to check
      if (i === j) {
        topLeftToButtomRightDiagonalPlayers.push(playerName);
      }
      if (i + "" + j === "13" || i + "" + j === "22" || i + "" + j === "31") {
        buttomLeftToTopRightDiagonalPlayers.push(playerName);
      }

      // add column gobblers into array to check
      gobblers = board.get(j + "" + i);

      playerName =
        gobblers.length > 0
          ? gobblers[gobblers.length - 1].userData.player
          : null;
      columnPlayers.push(playerName);
    }

    if (rowPlayers.every((player) => player === player1Name))
      return player1Name;
    if (rowPlayers.every((player) => player === player2Name))
      return player2Name;
    if (columnPlayers.every((player) => player === player1Name))
      return player1Name;
    if (columnPlayers.every((player) => player === player2Name))
      return player2Name;
  }
  if (
    topLeftToButtomRightDiagonalPlayers.every(
      (player) => player === player1Name
    )
  )
    return player1Name;
  if (
    topLeftToButtomRightDiagonalPlayers.every(
      (player) => player === player2Name
    )
  )
    return player2Name;
  if (
    buttomLeftToTopRightDiagonalPlayers.every(
      (player) => player === player1Name
    )
  )
    return player1Name;
  if (
    buttomLeftToTopRightDiagonalPlayers.every(
      (player) => player === player2Name
    )
  )
    return player2Name;
  return null;
};

export default checkWinner;
