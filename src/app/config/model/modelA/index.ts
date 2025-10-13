// * State Management
//  * Types 对应后端的业务模型数据结构
//  * API
//  * Utils
//  * Hooks 通过它和 UI 组件交互

import { create } from "zustand";

// types

interface CountActions {
  increment: () => void;
  decrement: () => void;
}

interface CountState {
  // 业务模型 组件的输入
  count: number;
  // 用户交互 组件的输出
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
