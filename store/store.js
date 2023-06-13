import { create } from "zustand";
import { SIZES, GOBBLER_TYPE, PLANE_TYPE, PLAYER_INFO } from "../constants";

const initialMap = new Map();
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    initialMap.set(i + "" + j, []);
  }
}

const useStore = create((set, get) => ({
  board: initialMap,
  setBoard: (board) => set(() => ({ board })),
  activePlayer: PLAYER_INFO.PLAYER1,
  setPlayer: (activePlayer) => set(() => ({ activePlayer })),
  activeGobbler: null,
  setActiveGobbler: (activeGobbler) => set(() => ({ activeGobbler })),
  unsetActiveGobbler: () => set(() => ({ activeGobbler: null })),
  activePlane: null,
  setActivePlane: (activePlane) => set(() => ({ activePlane })),
  winner: null,
  setWinner: (winner) => set(() => ({ winner })),
}));

export default useStore;
