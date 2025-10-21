// * State Management
//  * Client State vs Server State
//    * Zustand vs React Query
//  * API
//  * Hooks 通过它和 UI 组件交互

import { create } from "zustand";

import type { ConfigA } from "../../types/configs";
import { useConfig } from "../config";
import { useEffect } from "react";

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

  // sync server state to client state
  useEffect(() => {
    if (serverConfig?.a) {
      configAStore.getState().actions.updateConfigA(serverConfig.a);
    }
  }, [serverConfig]);

  return {
    serverConfigA: serverConfig?.a,
    clientConfigA: configAStore((state) => state.configA),
    updateConfigA: configAStore((state) => state.actions.updateConfigA),
  };
}
