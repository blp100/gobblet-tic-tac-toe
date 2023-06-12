import { create } from "zustand";
import checkGobbler from "../lib/check-gobbler";
import { SIZES, GOBBLER_TYPE, PLANE_TYPE, PLAYER_INFO } from "../constants";
import checkWinner from "../lib/check-winner";

const initialMap = new Map();
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    initialMap.set(i + "" + j, []);
  }
}

const useStore = create((set, get) => ({
  activePlayer: PLAYER_INFO.PLAYER1,
  setPlayer: (activePlayer) =>
    set(() => {
      return { activePlayer };
    }),
  // arrow: null, // object
  // setArrow: (arrow) => set(() => ({ arrow })),
  // test: () => {
  //   return get();
  // },
  arrow: null,
  setArrow: (arrow) => set((state) => ({ arrow })),
  setArrowVisible: (arrow) =>
    set(() => {
      console.log(get().activePlayer);
      if (!arrow?.name) {
        console.log("!!!");
        return;
      }
      if (arrow.name === get()?.activePlayer?.ARROW_NAME) {
        console.log("2!!!");
        arrow.visible = true;
        return { arrow };
      } else {
        console.log("3!!!");
        arrow.visible = false;
        return { arrow };
      }
    }),
  // isArrowVisible: (arrow) => {
  //   // console.log(arrow?.name);
  //   console.log(get().activePlayer.ARROW_NAME);
  //   // return arrow.name === get().activePlayer.ARROW_NAME;
  // },
  activeGobbler: null,
  onClickGobbler: (activeGobbler) => set(() => ({ activeGobbler })),
  onClickPlane: (plane) =>
    set((state) => {
      if (state.activeGobbler) {
        const arr = state.board.get(plane.userData.key);
        const newBoard = new Map(state.board); // create a new board for React state
        let winner = null;
        if (checkGobbler(arr, state.activeGobbler)) {
          if (state.activeGobbler.userData.plane) {
            const planeKey = state.activeGobbler.userData.plane.userData.key;
            const tempArr = [...state.board.get(planeKey)];
            const prevIndex = tempArr.indexOf(state.activeGobbler);
            tempArr.splice(prevIndex, 1);
            newBoard.set(planeKey, tempArr); // remove previous gobbler

            if (!winner) {
              winner = checkWinner(newBoard);
            }
          }
          state.activeGobbler.userData.plane = plane;
          const newArr = [...arr, state.activeGobbler];
          newBoard.set(plane.userData.key, newArr); // add gobbler in new position
          if (!winner) {
            winner = checkWinner(newBoard);
          }

          // console.log(winner);
          return {
            activeGobbler: null,
            board: newBoard,
            activePlayer: PLAYER_INFO.PLAYER2,
          };
        }
      }
      return { activeGobbler: null };
    }),
  unsetActiveGobbler: () => set(() => ({ activeGobbler: null })),
  board: initialMap,
  setBoard: (board) => set(() => ({ board })),
}));

export default useStore;
