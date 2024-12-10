import Gobbler from "./gobbler";
import Scene from "./environment";
import Plane from "./plane";
import Arrow from "./arrow";
import { SIZES, GOBBLER_TYPE, PLANE_TYPE, PLAYER_INFO } from "../../constants";
import WinnerText from "./winner-text";
import { useEffect, useMemo, useRef } from "react";
import useStore from "../../store/store";
import checkGobbler from "../../lib/check-gobbler";
import checkWinner from "../../lib/check-winner";

const Game = () => {
  const ref = useRef();

  // game object state
  const activePlayer = useStore((state) => state.activePlayer);
  const setPlayer = useStore((state) => state.setPlayer);
  const activeGobbler = useStore((state) => state.activeGobbler);
  const activePlane = useStore((state) => state.activePlane);
  const setActiveGobbler = useStore((state) => state.setActiveGobbler);
  const setActivePlane = useStore((state) => state.setActivePlane);
  const board = useStore((state) => state.board);
  const setBoard = useStore((state) => state.setBoard);
  const winner = useStore((state) => state.winner);
  const setWinner = useStore((state) => state.setWinner);

  // game rule
  useEffect(() => {
    if (activeGobbler && activePlane) {
      const arr = board.get(activePlane.userData.key);
      const newBoard = new Map(board); // create a new board for React state
      let tempWinner = null;
      if (checkGobbler(arr, activeGobbler)) {
        if (activeGobbler.userData.plane) {
          const planeKey = activeGobbler.userData.plane.userData.key;
          const tempArr = [...board.get(planeKey)];
          const prevIndex = tempArr.indexOf(activeGobbler);
          tempArr.splice(prevIndex, 1);
          newBoard.set(planeKey, tempArr); // remove previous gobbler

          if (!tempWinner) {
            tempWinner = checkWinner(newBoard);
          }
        }

        activeGobbler.userData.plane = activePlane;
        const newArr = [...arr, activeGobbler];
        newBoard.set(activePlane.userData.key, newArr); // add gobbler in new position
        if (!tempWinner) {
          tempWinner = checkWinner(newBoard);
        }
        if (tempWinner){
        setWinner(tempWinner===PLAYER_INFO.PLAYER1.NAME?PLAYER_INFO.PLAYER1:PLAYER_INFO.PLAYER2);
      }

        setActiveGobbler(null);
        setActivePlane(null);
        setPlayer(
          activePlayer === PLAYER_INFO.PLAYER1
            ? PLAYER_INFO.PLAYER2
            : PLAYER_INFO.PLAYER1
        );
        if (tempWinner){
          setPlayer(null);
        }
        setBoard(newBoard);
      }
    }
  }, [activeGobbler, activePlane, activePlayer, board]);

  // useEffect(() => {
  // }, [winner]);

  // Build gobblers
  const gobblers = useMemo(() => {
    const g = [];
    const sizeKeys = Object.keys(SIZES);
    for (let player = 0; player < 2; player++) {
      for (let size = 0; size < 3; size++) {
        const color =
          player === 0 ? PLAYER_INFO.PLAYER1.COLOR : PLAYER_INFO.PLAYER2.COLOR;
        const playerName =
          player === 0 ? PLAYER_INFO.PLAYER1.NAME : PLAYER_INFO.PLAYER2.NAME;
        const pos = player === 0 ? -30 : 30;
        const gobblerSize = SIZES[sizeKeys[size]].VALUE;
        const z = (size - 1) * 12;
        const y = gobblerSize / 2;
        const leftName = "player" + player + "size" + size + "left";
        const rightName = "player" + player + "size" + size + "right";
        g.push(
          <Gobbler
            key={leftName}
            name={leftName}
            position={[pos - gobblerSize / 2 - 1, y, z]}
            size={gobblerSize}
            color={color}
            userData={{
              size: SIZES[sizeKeys[size]],
              player: playerName,
            }}
          />
        );
        g.push(
          <Gobbler
            key={rightName}
            name={rightName}
            position={[pos + gobblerSize / 2 + 1, y, z]}
            size={gobblerSize}
            color={color}
            userData={{
              size: SIZES[sizeKeys[size]],
              player: playerName,
            }}
          />
        );
      }
    }
    return g;
  }, []);

  // Build Plane
  const planes = useMemo(() => {
    const p = [];
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        const pos = [(j - 2) * 10, 0.1, (i - 2) * 10];
        p.push(
          <Plane
            key={"plane" + i + "" + j}
            color={0xf9d3b7}
            position={pos}
            name={"plane" + i + "" + j}
            userData={{ key: i + "" + j }}
            visible={false}
          />
        );
      }
    }
    return p;
  }, []);

  return (
    <Scene style={{ height: "100vh" }}>
      {planes}
      {gobblers}
      {/* {arrows} */}
      {/* {winnerTexts} */}

      <Arrow
        key={PLAYER_INFO.PLAYER1.ARROW_NAME}
        name={PLAYER_INFO.PLAYER1.ARROW_NAME}
        color={PLAYER_INFO.PLAYER1.COLOR}
        xPos={-10}
        zRot={Math.PI / 2}
        visible={activePlayer === PLAYER_INFO.PLAYER1}
      />
      <Arrow
        key={PLAYER_INFO.PLAYER2.ARROW_NAME}
        name={PLAYER_INFO.PLAYER2.ARROW_NAME}
        color={PLAYER_INFO.PLAYER2.COLOR}
        xPos={10}
        zRot={-Math.PI / 2}
        visible={activePlayer === PLAYER_INFO.PLAYER2}
      />
      <WinnerText
        key={PLAYER_INFO.PLAYER1.WINNER_NAME}
        name={PLAYER_INFO.PLAYER1.WINNER_NAME}
        color={PLAYER_INFO.PLAYER1.COLOR}
        text={"winner!"}
        visible={winner === PLAYER_INFO.PLAYER1}
      />
      <WinnerText
        key={PLAYER_INFO.PLAYER2.WINNER_NAME}
        name={PLAYER_INFO.PLAYER2.WINNER_NAME}
        color={PLAYER_INFO.PLAYER2.COLOR}
        text={"winner!"}
        visible={winner === PLAYER_INFO.PLAYER2}
      />
    </Scene>
  );
};

export default Game;
