import { create } from "zustand";
import checkGobbler from "../lib/check-gobbler";

const initialMap = new Map();
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    initialMap.set(i + "" + j, []);
  }
}

const useStore = create((set) => ({
  activeGobbler: null,
  onClickGobbler: (activeGobbler) => set(() => ({ activeGobbler })),
  onClickPlane: (plane) =>
    set((state) => {
      if (state.activeGobbler) {
        const arr = state.board.get(plane.userData.key);
        const newBoard = new Map(state.board); // TODO: create a new board

        if (checkGobbler(arr, state.activeGobbler)) {
          if (state.activeGobbler.userData.plane) {
            const planeKey = state.activeGobbler.userData.plane.userData.key;
            const tempArr = [...state.board.get(planeKey)];
            const prevIndex = tempArr.indexOf(state.activeGobbler);
            tempArr.splice(prevIndex, 1);
            newBoard.set(planeKey, tempArr); // TODO: remove
          }

          state.activeGobbler.userData.plane = plane;
          const newArr = [...arr, state.activeGobbler];
          newBoard.set(plane.userData.key, newArr); // add

          return {
            activeGobbler: null,
            board: newBoard,
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
