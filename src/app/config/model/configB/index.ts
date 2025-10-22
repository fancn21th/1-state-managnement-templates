import { create } from "zustand";

import type { ConfigB } from "../../types/configs";
import { devtools } from "zustand/middleware";
import { Workflow } from "../../types/workflows";

// client types

type ConfigBStoreState = {
  configB: ConfigB;
};

type ConfigBStoreActions = {
  updateConfigB: (config: ConfigB) => void;
  updateVariables: (variables: Record<string, string>) => void;
  updateWorkflow: (workflow: Workflow) => void;
};

type ConfigBStore = ConfigBStoreState & ConfigBStoreActions;

// store based state management
export const configBStore = create<ConfigBStore>()(
  devtools(
    (set): ConfigBStore => ({
      configB: {} as ConfigB,
      updateConfigB: (config: ConfigB) => set(() => ({ configB: config })),
      updateVariables: (variables: Record<string, string>) =>
        set((state) => ({
          configB: {
            ...state.configB,
            variables,
          },
        })),
      updateWorkflow: (workflow: Workflow) =>
        set((state) => ({
          configB: {
            ...state.configB,
            workflow,
          },
        })),
    }),
    {
      enabled: true,
    }
  )
);
