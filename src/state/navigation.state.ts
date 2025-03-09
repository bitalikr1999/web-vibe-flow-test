import { create } from "zustand";

export enum NavigationKey {
  Loading = "loading",
  Auth = "auth",
  Dashboard = "dashboard",
}

interface NavigationState {
  state: NavigationKey;

  setState(state: NavigationKey): void;
}

export const useNavigationState = create<NavigationState>((set) => ({
  state: NavigationKey.Loading,

  setState(state) {
    set({ state });
  },
}));

export const getNavigationState = () => useNavigationState.getState();
