import { create } from "zustand";

const useStore = create((set) => ({
  activeGobbler: null,
  onClickGobbler: (activeGobbler) => set(() => ({ activeGobbler })),
  onClickPlane: (plane) =>
    set((state) => {
      if (state.activeGobbler) {
        state.activeGobbler.userData.plane = plane;
      }
      return { activeGobbler: null };
    }),
  unsetActiveGobbler: () => set({ activeGobbler: null }),
}));

export default useStore;
