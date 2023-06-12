import { PLAYER_INFO } from "../constants";

const checkWinner = (board) => {
  console.log(board.get("11"));
  console.log(board.get("12"));
  console.log(board.get("13"));

  const player1Name = PLAYER_INFO.PLAYER1.NAME;
  const player2Name = PLAYER_INFO.PLAYER2.NAME;

  for (let column = 1; column <= 3; column++) {
    const players = [];
    for (let row = 1; row <= 3; row++) {
      const gobblers = board.get(column + "" + row);
      const playerName =
        gobblers.length > 0
          ? gobblers[gobblers.length - 1].userData.player
          : null;
      players.push(playerName);
    }

    if (players.every((player) => player === player1Name)) return player1Name;
    if (players.every((player) => player === player2Name)) return player2Name;
  }
  //   for (let y = 0; y < 3; y++) {
  //     const row = board[y];
  //     const players = row.map((gobblers) =>
  //       gobblers.length ? gobblers[gobblers.length - 1].userData.player : null
  //     );
  //     if (players.every((player) => player === 0)) return 0;
  //     if (players.every((player) => player === 1)) return 1;
  //   }
  // Check rows
  // Check column
  // Check diagonal
  return null;
};

export default checkWinner;
