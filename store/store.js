import { create } from "zustand";

export const useGobblerStore = create((set) => ({
  active: null,
  setActive: (g) => set((state) => ({ active: g })),
  unsetActive: () => set({ active: null }),
}));

export const usePlaneStore = create((set) => ({
  active: null,
  setActive: (p) => set((state) => ({ active: p })),
  unsetActive: () => set({ active: null }),
}));
