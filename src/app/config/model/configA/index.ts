import { create } from "zustand";

import type { ConfigA } from "../../types/configs";
import { devtools } from "zustand/middleware";
import { Model } from "../../types/models";

// client types

type ConfigAStoreState = {
  configA: ConfigA;
};

type ConfigAStoreActions = {
  updateConfigA: (config: ConfigA) => void;
  updateModel: (model: Model) => void;
};

type ConfigAStore = ConfigAStoreState & ConfigAStoreActions;

// store based state management
export const configAStore = create<ConfigAStore>()(
  devtools(
    (set): ConfigAStore => ({
      configA: {} as ConfigA,
      updateConfigA: (configA: ConfigA) => set(() => ({ configA })),
      updateModel: (model: Model) =>
        set((state) => ({
          configA: {
            ...state.configA,
            model,
          },
        })),
    }),
    {
      enabled: true,
    }
  )
);
