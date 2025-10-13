// * State Management
//  * Types
//  * API
//  * Utils
//  * Hooks

import { create } from "zustand";

// types

interface CountActions {
  increment: () => void;
  decrement: () => void;
}

interface CountState {
  count: number;
  actions: CountActions;
}

// store based state management
const countStore = create<CountState>()((set) => ({
  count: 0,
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  },
}));

// hooks
export function useCount() {
  return {
    count: countStore((state) => state.count),
    increment: countStore((state) => state.actions.increment),
    decrement: countStore((state) => state.actions.decrement),
  };
}
