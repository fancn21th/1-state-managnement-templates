// * State Management
//  * Types
//  * API
//  * Utils
//  * Hooks

import { create } from "zustand";

// types
interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// store based state management
const countStore = create<CountState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// hooks
export function useCount() {
  return {
    count: countStore((state) => state.count),
    increment: countStore((state) => state.increment),
    decrement: countStore((state) => state.decrement),
  };
}
