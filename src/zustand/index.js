import { create } from "zustand";

export const useOmniStore = create((set) => ({
  hasSeenOnboarding: false,
  isAuthorized: false,

  authorize: () => set({ isAuthorized: true }),
}));
