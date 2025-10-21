// * State Management
//  * Client State vs Server State
//    * Zustand vs React Query
//  * API
//  * Hooks 通过它和 UI 组件交互

import { create } from "zustand";

import type { ConfigA } from "../../types/configs";
import { useConfig } from "../config";

// types
type ConfigAStore = {
  configA: ConfigA;
  actions: {
    updateConfigA: (configA: ConfigA) => void;
  };
};

// store based state management
const configAStore = create<ConfigAStore>()((set) => ({
  configA: {} as ConfigA,
  actions: {
    updateConfigA: (configA: ConfigA) => set(() => ({ configA })),
  },
}));

// hooks
// this is for the UI components related to ConfigA only
export function useConfigA() {
  // server state from api
  const { serverConfig } = useConfig();

  return {
    serverConfigA: serverConfig?.a,
    setConfigA: configAStore((state) => state.actions.updateConfigA),
  };
}
