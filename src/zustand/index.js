import { create } from "zustand";

export const useOmniStore = create((set) => ({
  hasSeenOnboarding:false,
  isAuthorized: false,
}));
