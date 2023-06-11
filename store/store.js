import { create } from "zustand";

const useGobblerStore = create((set) => ({
  active: null,
  setActive: (g) => set((state) => ({ active: g })),
  unsetActive: () => set({ active: null }),
}));

export { useGobblerStore };
